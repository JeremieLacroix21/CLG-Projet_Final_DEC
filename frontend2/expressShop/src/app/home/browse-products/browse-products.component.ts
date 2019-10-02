import { Component, OnInit } from '@angular/core';

import { products } from '../../models/sample-products';
import { Product } from '../../models/product';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit
{
  // Contains all the products got from the api
  // TODO: Load the products in loadProducts() instead of using the sample
  private loadedProducts = products;
  // Contains all the owners(suppliers) that own products in the array above
  // Example: supplierMap[products[0].idfournisseur].nomutilisateur
  private supplierMap: { [key:number]:string } = {};

  constructor() { }

  ngOnInit() {
  }

  // Gets a list of products from the API.
  // TODO: Include parameters for searches and filters
  private loadProducts() {
    // TODO: Call the API to get the products

    // Get a list of all the products' owners and map them to their id
    for(let product of this.loadedProducts) {
      // Check if the supplier is already loaded
      if (typeof this.supplierMap[product.idfournisseur] === 'undefined') {
        // TODO: Call the API using `product.idfournisseur` to get the supplier
        //this.supplierMap[product.idfournisseur] = LOADED_SUPPLIER;
      }
    }
  }

  private onClickFavoriteBtn(event) {
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
    for(var i = 0; i < this.loadedProducts.length; ++i) {
      if (this.loadedProducts[i].idproduits == productId) {
        if (btn.attributes['favorite'].value === 'true') {
          window.alert(this.loadedProducts[i].nom_produit + ' has been added to your favorites')
        } else {
          window.alert(this.loadedProducts[i].nom_produit + ' has been removed from your favorites')
        }
        break;
      }
    }
  }

}
