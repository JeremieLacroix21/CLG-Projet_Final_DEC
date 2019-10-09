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
 //items = TABelement;
  
    
    //var allo = new elements("1","img","allo",1);


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})


export class ShoppingCartComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['image', 'id', 'nom', 'prix', 'quantité', 'sous-total'];
  NOMPAGE = "Votre Panier";
  TABelement : productPanier[];
  dataSource : MatTableDataSource<productPanier>;
  
  total : number;


  placeholder : string = "allo";

  subscription: Subscription;
  products: productPanier[];
  filteredProducts: productPanier[];

  constructor(private productService: ProductService, private loader: LoaderService) { 
      
        this.subscription = this.productService.GetpanierFromId(+localStorage.getItem('currentUser')).
          subscribe( products => { this.filteredProducts = this.products = products
              setTimeout(() => {  this.loader.hide();
              });
            });

            this.TABelement = this.filteredProducts;
            this.dataSource = new MatTableDataSource<productPanier>(this.TABelement);
            this.Total();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  increment(column)
  {
    this.TABelement[column].qty += 1;    
    this.Total();
      
  }
  decrement(column)
  {
    if(this.TABelement[column].qty - 1 == 0)
    {
      this.delete(column);
    }
    else 
    {
      this.TABelement[column].qty -= 1;
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
    return (this.TABelement[i].prix * this.TABelement[i].qty).toString();
  }
  Total()
  {
    this.total = 0;
    for(let i = 0;i<this.TABelement.length;i++)
    {
        this.total += this.TABelement[i].prix * this.TABelement[i].qty;
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



