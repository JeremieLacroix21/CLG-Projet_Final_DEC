import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard';
import { AbstractControlDirective } from '@angular/forms';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { ModifProfileComponent } from './modif-profile/modif-profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ModifProfileComponent,
  },
  {
    path: 'browse',
    component: BrowseProductsComponent
  },
    
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
