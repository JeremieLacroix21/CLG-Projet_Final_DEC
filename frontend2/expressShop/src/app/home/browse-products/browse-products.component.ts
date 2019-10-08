import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';
import { Router, ActivatedRoute } from "@angular/router";
import { Supplier } from 'src/app/models/supplier';
import { first } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit, OnDestroy
{
  /* max = 9999;
  min = 0; */
  subscription: Subscription;
  products: Product[];
  filteredProducts: Product[];

  private loadedProducts : Observable<Product[]>;
  // Contains all the owners(suppliers) that own products in the array above
  // Example: supplierMap[products[0].idfournisseur].nomutilisateur
  //private supplierMap: { [key:number]:Supplier } = {};

  constructor(private productService: ProductService, private spinner: NgxSpinnerService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => this.filteredProducts = this.products = products );
  }

  ngOnInit() {
    this.loadProducts();
    this.spinner.show();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private loadProducts() {
    this.loadedProducts = this.productService.getAll();

    /*
    // Get a list of all the products' owners and map them to their id
    for(let product of this.loadedProducts) {
      // Check if the supplier is already loaded
      if (typeof this.supplierMap[product.idfournisseur] === 'undefined') {
        // TODO: Call the API using `product.idfournisseur` to get the supplier
        //this.supplierMap[product.idfournisseur] = LOADED_SUPPLIER;
      }
    }
    */
  }
  private AddProductToCart (id:number) {

  }

  private FilterNom(chaine:string){
    this.filteredProducts = (chaine) ?
      this.products.filter(p => p.nom.toLowerCase().includes(chaine.toLowerCase())):
        this.products;
  }
}
