import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';
import { Router, ActivatedRoute } from "@angular/router";
import { Supplier } from 'src/app/models/supplier';
import { first } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit, OnDestroy
{
  subscription: Subscription;
  products: Product[];
  filteredProducts: Product[];

  constructor(private productService: ProductService, private loader: LoaderService) {
    this.subscription = this.productService.getAll().
      subscribe( products => { this.filteredProducts = this.products = products
          setTimeout(() => {  this.loader.hide();
          });
    });
  }

  ngOnInit() {
    this.loader.show("Chargement des produits...");
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private AddProductToCart (idproduct:number,iduser:number) {
    /*TODO */
  }

  private Filter(chaine:string, idf:string){
    this.filteredProducts = this.products;

    console.log(this.filteredProducts)

    this.filteredProducts = (chaine) ?
      this.filteredProducts.filter(p => p.nom.toLowerCase().includes(chaine.toLowerCase())):
        this.filteredProducts;
    console.log()
    this.filteredProducts = (idf) ?
      this.filteredProducts.filter(p => p.nomFournisseur.toLowerCase().includes(idf.toLowerCase())):
        this.filteredProducts;
  }


}
