import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard';
import { AbstractControlDirective } from '@angular/forms';
import { BrowseProductsComponent } from './browse-products/browse-products.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
<<<<<<< HEAD
},
{ 
    path: '**',
    redirectTo: '' }
=======
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
>>>>>>> 85c015b2d293c40f14c3f354fb89eeddb76cd1b7
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
