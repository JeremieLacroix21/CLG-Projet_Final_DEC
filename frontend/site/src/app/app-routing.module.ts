import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
<<<<<<< HEAD
  },
  {
    path: 'profile',
    component: ModifProfileComponent,
    //canActivate: [AuthGuard]
  },
  { path: '**',
    redirectTo: '' }
=======
},
{
  path: 'profil',
  component: ModifProfileComponent,
},
  
{ path: '**', redirectTo: '' }
>>>>>>> 7f106555fd276c1802dcc2ff685740249e4d5959
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
