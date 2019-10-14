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
import { AuthService } from 'src/app/services';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) 
  paginator: MatPaginator;

  displayedColumns: string[] = ['image', 'nom', 'prix', 'quantité', 'sous-total'];

  dataSource : MatTableDataSource<productPanier>;
  total : number;
  popUpOpen = false;

  constructor(private auth: AuthService, private productService: ProductService, private loader: LoaderService) {
    this.dataSource = new MatTableDataSource<productPanier>(this.auth.currDistributor.cart);
    this.dataSource.paginator = this.paginator;
    this.Total();
  }

  ngOnInit() {
    //this.loader.show("Chargement des produits...");
    //console.log(this.auth.currDistributor.cart)
    this.popUpOpen = false;
  }
  
  increment(idProduit: number) {
    let currQtt = this.dataSource.filteredData.find(item => item.idproduits === idProduit).quantity += 1;
    this.productService.UpdateQuantityPanier(this.auth.currUser.iduser, idProduit, currQtt);

    this.Total();
  }
  
  decrement(idProduit: number) {
    let currQtt = this.dataSource.filteredData.find((item => item.idproduits === idProduit)).quantity -= 1;
    if (currQtt == 0) {
      this.delete(idProduit);
    } else {
      this.productService.UpdateQuantityPanier(this.auth.currUser.iduser, idProduit, currQtt).subscribe();
    }

    this.Total();
  }

  delete(idProduit: number) {
    this.productService.DeleteProductFromCart(this.auth.currUser.iduser, idProduit).subscribe();
    // Delete the user locally
    this.dataSource.data = this.dataSource.data.filter(u => u.idproduits != idProduit);
  }

  Total() {
    this.total = 0;
    for(let i = 0; i < this.dataSource.filteredData.length; ++i) {
      this.total += (this.dataSource.filteredData[i].prix * this.dataSource.filteredData[i].quantity);
    }
  }

  ValidateCommande() {
    this.popUpOpen = true;
  }
}
