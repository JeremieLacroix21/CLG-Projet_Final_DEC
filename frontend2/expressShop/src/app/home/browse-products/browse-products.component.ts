import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/product';
import { Router, ActivatedRoute } from "@angular/router";
import { Supplier } from 'src/app/models/supplier';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit
{
  loadedProducts : any[];
  constructor(private productservice: ProductService) {
    }

  ngOnInit() {
    this.GetProducts();
  }
  
  GetProducts(){
    this.productservice.GetProduct().subscribe(
        data => {
          this.loadedProducts = data;
          console.log(data);
        });
  }
}
