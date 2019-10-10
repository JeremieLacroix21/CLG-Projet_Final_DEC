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
import { config } from 'src/config';


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
    this.subscription = this.productService.GetpanierFromId(+localStorage.getItem(config.storedUser)).subscribe(products => {
      this.TABelement = this.products = products
      setTimeout(() => {
        this.dataSource = new MatTableDataSource<productPanier>(this.TABelement);
        this.dataSource.paginator = this.paginator;
        console.log(this.TABelement)
        this.loader.hide();
        this.Total();
      });
    });
  }

  ngOnInit() {
    this.loader.show("Chargement des produits...");
  }
  
  increment(column)
  {
    console.log("increment idProduit: "+column);
    this.TABelement.find((item => item.idproduit === column)).quantity += 1;   
    this.Total();
    this.UpdateQuantityPanier(+localStorage.getItem(config.storedUser),column,this.TABelement.find(item => item.idproduit === column).quantity);
  }
  decrement(column)
  {
    console.log("decrement idProduit: "+column);
    if( this.TABelement.find((item => item.idproduit === column)).quantity  - 1 == 0)
    {
      console.log("decrement is ready to call delete");
      this.delete(column);
    }
    else 
    {
      this.TABelement.find((item => item.idproduit === column)).quantity -= 1;
      let user = +localStorage.getItem(config.storedUser);
      let qty = this.TABelement.find(item => item.idproduit === column).quantity;
      this.UpdateQuantityPanier(user,column,qty);
    }
    this.Total();
  }

  delete(column)
  {
    delete this.TABelement[column];
    this.productService.DeleteProductFromCart(+localStorage.getItem(config.storedUser), column).subscribe();
    // Delete the user locally
    this.dataSource.data = this.dataSource.data.filter(u => u.idproduit != column);
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

  DeleteProductFromCart(iduser:number,idproduit:number)
  {
      this.productService.DeleteProductFromCart(iduser,idproduit).subscribe();
  }

  UpdateQuantityPanier(iduser:number,idproduit:number,quantity:number)
  {
      this.productService.UpdateQuantityPanier(iduser,idproduit,quantity).subscribe();
  }
}



