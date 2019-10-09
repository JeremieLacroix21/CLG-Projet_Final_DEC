import { Component, OnInit, ViewChild } from '@angular/core';
import { productPanier } from 'src/app/models/productPanier.entity';
import { combineLatest, Subscription } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { ProductService } from 'src/app/services/product.service';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) 
  paginator: MatPaginator;

  displayedColumns: string[] = ['image', 'id', 'nom', 'prix', 'quantité'/*, '-total'*/];
  NOMPAGE = "Votre Panier";

  dataSource : MatTableDataSource<productPanier>;
  
  

  total : number;

  subscription: Subscription;
  products: productPanier[];
  filteredproducts : productPanier[];
  TABelement : productPanier[];


  constructor(private productService: ProductService, private loader: LoaderService) { 
        this.subscription = this.productService.GetpanierFromId(11).subscribe(products => {
        this.filteredproducts = this.products = products
        setTimeout(() => {
        this.TABelement = this.filteredproducts;
        this.dataSource = new MatTableDataSource<productPanier>(this.TABelement);
        console.log(this.TABelement)
        this.loader.hide();
        });
      });
            this.Total();
  }
  ngOnInit() {
    this.loader.show("Chargement des produits...");
    this.dataSource.paginator = this.paginator;
  }
  increment(column)
  {
    this.TABelement[column].quantity += 1;    
    this.Total();
      
  }
  decrement(column)
  {
    if(this.TABelement[column].quantity - 1 == 0)
    {
      this.delete(column);
    }
    else 
    {
      this.TABelement[column].quantity -= 1;
    }
    this.Total();
  }
  delete(column)
  {
    delete this.TABelement[column];
    document.getElementById("tr" + column).remove();
  }
  SousTotal(i) : string
  {
    return (this.TABelement[i].prix * this.TABelement[i].quantity).toString();
  }
  Total()
  {
    this.total = 0;
    for(let i = 0;i<this.TABelement.length;i++)
    {
        this.total += this.TABelement[i].prix * this.TABelement[i].quantity;
    }
  }
  deleteProductFromCart(iduser:number,idproduit:number)
  {
      this.productService.DeleteProductFromCart(iduser,idproduit);
  }
  setquantity(iduser:number,idproduit:number,quantity:number)
  {
      this.productService.UpdateQuantityPanier(iduser,idproduit,quantity);
  }
  
}



