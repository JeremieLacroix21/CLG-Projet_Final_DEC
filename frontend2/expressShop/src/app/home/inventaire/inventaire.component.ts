import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css']
})
export class InventaireComponent implements OnInit, OnDestroy {

  public dataSource = new MatTableDataSource<Product>();
  subscription: Subscription;
  products: Product[];

  public displayedColumns = ['idproduits', 'prix', 'tags', 'idFournisseur', 'nomFournisseur', 'enStock', 'nom', 'description'];

  
  constructor(private productService: ProductService, private auth: AuthService) { 
    this.subscription = this.productService.getProduitByFournisseur(auth.currUser.iduser).subscribe(products => {this.dataSource.data = this.products = products
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
