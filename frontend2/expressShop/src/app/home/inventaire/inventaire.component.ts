import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InventaireComponent implements OnInit, OnDestroy {

  public dataSource = new MatTableDataSource<Product>();
  subscription: Subscription;
  products: Product[];
  resultsLength = 0;

  public displayedColumns = ['nom', 'prix', 'tags' ,'enStock', 'description'];

  
  constructor(private productService: ProductService, private auth: AuthService) { 
    this.subscription = this.productService.getProduitByFournisseur(auth.currUser.iduser).subscribe(products => 
      {
        this.dataSource.data = this.products = products
        this.resultsLength = products.length;

        console.log(this.products);
    });

    
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
