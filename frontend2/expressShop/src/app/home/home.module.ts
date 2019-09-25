import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BrowseproductComponent } from './browseproduct/browseproduct.component';
import { ModifprofileComponent } from './modifprofile/modifprofile.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    BrowseproductComponent,
    ModifprofileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
