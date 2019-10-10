import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { config } from 'src/config';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
  }

  onClickCartBtn(event, idProduct: number) {
    let currUserId = +localStorage.getItem(config.storedUser);
    
    this.productService.AddProductToCart(currUserId, idProduct, 1).subscribe(() => {
      this.productService.RefreshCartItemCount(currUserId);
    });
  }
  onClickRemoveFromCart(idproduct:number) {
    let iduser = +localStorage.getItem(config.storedUser);
    
    this.productService.AddProductToCart(iduser, idproduct, 1).subscribe(() => {
      this.productService.RefreshCartItemCount(iduser);
    });
  }

  // private onClickFavoriteBtn(event) {
  //   let btnId = event.currentTarget.id;
  //   let btn = document.getElementById(btnId);
  //   let splitBtnId = btnId.split('-');
  //   let productId = splitBtnId[splitBtnId.length-1];

  //   // Switch the displayed icon
  //   for(var i = 0; i < btn.children.length; ++i) {
  //     btn.children[i].classList.toggle('mdc-icon-button__icon--on');
  //   }

  //   // Toggle the favorite attribute
  //   btn.attributes['favorite'].value = (btn.attributes['favorite'].value === 'false' ? 'true' : 'false');

  //   let newFavoriteValue = false;
  //   for(var i = 0; i < this.loadedProducts.length; ++i) {
  //     if (this.loadedProducts[i].idproduits == productId) {
  //       newFavoriteValue = (btn.attributes['favorite'].value === 'true');
  //       break;
  //     }
  //   }

  //   // TODO: Update the product (replace alerts below)
  //   if (newFavoriteValue) {
  //     window.alert(this.loadedProducts[i].nom_produit + ' has been added to your favorites')
  //   } else {
  //     window.alert(this.loadedProducts[i].nom_produit + ' has been removed from your favorites')
  //   }
  // }
}
