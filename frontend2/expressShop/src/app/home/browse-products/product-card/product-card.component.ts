import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { config } from 'src/config';
import { AuthService } from 'src/app/services';
import { Distributor } from 'src/app/models/distributor';
import { productPanier } from 'src/app/models/productPanier.entity';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  private isInCart: boolean;
  private isInFavorites: boolean;

  @Input() product: Product;

  constructor(private auth: AuthService, private productService: ProductService, private loader: LoaderService) { }

  ngOnInit() {
    this.isInCart = (this.auth.currentUserValue.cart.findIndex(p => p.idproduits == this.product.idproduits) > -1);
    this.isInFavorites = false;
  }

  private onClickCartBtn(event) {
    this.loader.show("Modification du panier en cours...");
    let currUserId = this.auth.currentUserValue.iduser;
    let foundIndexInCart = this.auth.currentUserValue.cart.findIndex(p => p.idproduits == this.product.idproduits);

    if (foundIndexInCart > -1) {
      this.productService.DeleteProductFromCart(currUserId, this.product.idproduits).subscribe(() => {
        delete this.auth.currentUserValue.cart[foundIndexInCart];
        this.auth.currentUserValue.cart.splice(foundIndexInCart, 1);

        this.productService.RefreshCartItemCount(this.auth.currentUserValue.cart.length);
        this.isInCart = false;
        this.loader.hide();
      });
    } else {
      this.productService.AddProductToCart(currUserId, this.product.idproduits, 1).subscribe(() => {
        let p = new productPanier();
        p.idproduits = this.product.idproduits;
        p.imgGUID = this.product.imgGUID;
        p.nom = this.product.nom;
        p.prix = this.product.prix;
        p.quantity = 1;

        this.auth.currentUserValue.cart.push(p);

        this.productService.RefreshCartItemCount(this.auth.currentUserValue.cart.length);
        this.isInCart = true;
        this.loader.hide();
      });
    }
  }

  private onClickFavoriteBtn(event) {
    this.isInFavorites = !this.isInFavorites;
  }

}
