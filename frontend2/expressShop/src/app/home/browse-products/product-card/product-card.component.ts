import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { config } from 'src/config';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(private auth: AuthService, private productService: ProductService) { }

  ngOnInit() {
  }

  onClickCartBtn(event, idProduct: number) {
    let currUserId = this.auth.currentUserValue.iduser;
    
    this.productService.AddProductToCart(currUserId, idProduct, 1).subscribe(() => {
      this.productService.RefreshCartItemCount(currUserId);

      //this.auth.currentUserValue.cart
    });
  }
/*
  private onClickFavoriteBtn(event, idProduct: number) {
    let btn = document.getElementById(event.currentTarget.id);

    // Switch the displayed icon
    for(var i = 0; i < btn.children.length; ++i) {
      btn.children[i].classList.toggle('mdc-icon-button__icon--on');
    }

    // Toggle the inCart attribute
    btn.attributes['inCart'].value = (btn.attributes['inCart'].value === 'false' ? 'true' : 'false');

    // Update the product locally


    // TODO: Update the product (replace alerts below)
    
    if (newFavoriteValue) {
      window.alert(this.loadedProducts[i].nom_produit + ' has been added to your favorites')
    } else {
      window.alert(this.loadedProducts[i].nom_produit + ' has been removed from your favorites')
    }
  }*/
}
