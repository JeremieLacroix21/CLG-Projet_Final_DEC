import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { products } from '../../models/sample-products';


@Component({
  selector: 'app-browseproduct',
  templateUrl: './browseproduct.component.html',
  styleUrls: ['./browseproduct.component.css']
})
export class BrowseproductComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit() {
  }

  onClickFavoriteBtn(event) {
    let btnId = event.currentTarget.id;
    let btn = document.getElementById(btnId);
    let splitBtnId = btnId.split('-');
    let productId = splitBtnId[splitBtnId.length-1];

    // Switch the displayed icon
    for(var i = 0; i < btn.children.length; ++i) {
      btn.children[i].classList.toggle('mdc-icon-button__icon--on');
    }

    // Toggle the favorite attribute
    btn.attributes['favorite'].value = (btn.attributes['favorite'].value === 'false' ? 'true' : 'false');

    // TODO: Update the product (replace code below)
    for(var i = 0; i < this.products.length; ++i) {
      if (products[i].idproduits == productId) {
        if (btn.attributes['favorite'].value === 'true') {
          window.alert(products[i].nom_produit + ' has been added to your favorites')
        } else {
          window.alert(products[i].nom_produit + ' has been removed from your favorites')
        }
        break;
      }
    }
  }

}
