import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard';
import { AbstractControlDirective } from '@angular/forms';

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
    path: '**',
    redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
