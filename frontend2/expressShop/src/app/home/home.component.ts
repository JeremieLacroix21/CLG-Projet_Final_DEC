import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from '../services/loader.service';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

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

  constructor(private loader: LoaderService, private spinner: NgxSpinnerService, private productsService: ProductService) { }

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
    })
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
    this.nbCartItemsSubscription.unsubscribe();
  }
}
