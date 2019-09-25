import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModifProfileComponent } from './modif-profile/modif-profile.component';
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
  path: 'profil',
  component: ModifProfileComponent,
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
