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

  displayedColumns: string[] = ['image', 'id', 'nom', 'prix', 'quantité', 'sous-total'];
  NOMPAGE = "Votre Panier";

  dataSource : MatTableDataSource<productPanier>;
  total : number;

  subscription: Subscription;
  products: productPanier[];
  TABelement : productPanier[];


  constructor(private productService: ProductService, private loader: LoaderService) {
    this.getAllitems();
  }

  getAllitems() {
    this.subscription = this.productService.GetpanierFromId(+localStorage.getItem('currentuser')).subscribe(products => {
      this.TABelement = this.products = products
      setTimeout(() => {
        this.dataSource = new MatTableDataSource<productPanier>(this.TABelement);
        this.Total();
        this.dataSource.paginator = this.paginator;
        console.log(this.TABelement)
        this.loader.hide();
      });
    });
  }

  ngOnInit() {
    this.loader.show("Chargement des produits...");
  }
  
  increment(column)
  {
    this.TABelement.find((item => item.idproduit === column)).quantity += 1;   
    this.Total();
    this.setquantity(+localStorage.getItem('currentuser'),column,this.TABelement.find(item => item.idproduit === column).quantity);
  }
  decrement(column)
  {
    
    if( this.TABelement.find((item => item.idproduit === column)).quantity  - 1 == 0)
    {
      this.delete(column);
    }
    else 
    {
      this.TABelement.find((item => item.idproduit === column)).quantity -= 1;
      let user = +localStorage.getItem('currentuser');
      let qty = this.TABelement.find(item => item.idproduit === column).quantity;
      this.setquantity(user,column,qty);
    }
    this.Total();
  }
  delete(column)
  {
    delete this.TABelement[column];
    this.deleteProductFromCart(+localStorage.getItem('currentuser'),column);
    this.getAllitems();
  }
  SousTotal(i) : string
  {
    return (this.TABelement.find((item => item.idproduit === i)).prix * this.TABelement.find((item => item.idproduit === i)).quantity).toString();
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



