import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from '../services/loader.service';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services';
import { Router } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private loaderText: string;
  private loaderSubscription: Subscription;
  private nbCartItems: number;
  private nbCartItemsSubscription: Subscription;
  private nomutilisateur:string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private loader: LoaderService,
    private spinner: NgxSpinnerService,
    private productsService: ProductService

  ) { 

    this.nomutilisateur = auth.currUser.nomutilisateur;
  }

  ngOnInit() {
    this.loaderSubscription = this.loader.text.subscribe(data => {
      this.loaderText = data;
      if (data === "") {
        this.spinner.hide();
      } else {
        this.spinner.show();
      }
    });

    this.nbCartItemsSubscription = this.productsService.nbCartItems.subscribe(data => {
      this.nbCartItems = data;
    });

    if (this.auth.currUser.TypeUser === this.auth.D) {
      this.productsService.RefreshCartItemCount(this.auth.currDistributor.cart.length);
    }
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
    this.nbCartItemsSubscription.unsubscribe();
    console.log("aw man, creeper");
  }

  callLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
