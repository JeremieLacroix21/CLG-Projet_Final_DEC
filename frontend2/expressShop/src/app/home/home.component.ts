import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from '../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private loaderText: string;
  private loaderSubscription: Subscription;

  constructor(private loader: LoaderService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
      this.loaderSubscription = this.loader.text.subscribe(data => {
        this.loaderText = data;
        if (data === "") {
          this.spinner.hide();
        } else {
          this.spinner.show();
        }
      });
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}
