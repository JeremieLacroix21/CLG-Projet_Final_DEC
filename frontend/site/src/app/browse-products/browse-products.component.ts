import { Component, OnInit } from '@angular/core';

import { products } from '../models/sample-products';
import { Product } from '../models/product';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit {

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
