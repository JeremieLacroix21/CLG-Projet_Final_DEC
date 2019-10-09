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
import { productPanier } from 'src/app/models/productPanier.entity';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit, OnDestroy
{
  subscription: Subscription;
  products2: productPanier[];
  filteredProducts2: productPanier[];

  constructor(private productService: ProductService, private loader: LoaderService) {
    this.subscription = this.productService.GetpanierFromId().
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

  private FilterNom(chaine:string){
    this.filteredProducts = (chaine) ?
      this.products.filter(p => p.nom.toLowerCase().includes(chaine.toLowerCase())):
        this.products;
  }
}
