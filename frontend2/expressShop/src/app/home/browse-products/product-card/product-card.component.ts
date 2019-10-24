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
    if (this.auth.currType == this.auth.D) {
      this.isInCart = (this.auth.currDistributor.cart.findIndex(p => p.idproduits == this.product.idproduits) > -1);
      this.isInFavorites = false;
    }
  }

  private onClickCartBtn(event) {
    this.loader.show("Modification du panier en cours...");
    let currUserId = this.auth.currUser.iduser;
    let foundIndexInCart = this.auth.currDistributor.cart.findIndex(p => p.idproduits == this.product.idproduits);

    if (foundIndexInCart > -1) {
      this.productService.DeleteProductFromCart(currUserId, this.product.idproduits).subscribe(() => {
        delete this.auth.currDistributor.cart[foundIndexInCart];
        this.auth.currDistributor.cart.splice(foundIndexInCart, 1);

        this.productService.RefreshCartItemCount(this.auth.currDistributor.cart.length);
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

        this.auth.currDistributor.cart.push(p);

        this.productService.RefreshCartItemCount(this.auth.currDistributor.cart.length);
        this.isInCart = true;
        this.loader.hide();
      });
    }
  }

  private onClickFavoriteBtn(event) {
    this.isInFavorites = !this.isInFavorites;
  }

}
