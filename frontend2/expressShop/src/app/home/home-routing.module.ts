import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BrowseproductComponent } from './browseproduct/browseproduct.component';
import { ModifprofileComponent } from './modifprofile/modifprofile.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children:[
      {path: 'browseproduct', component: BrowseproductComponent},
      {path: 'modifprofile', component: ModifprofileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
