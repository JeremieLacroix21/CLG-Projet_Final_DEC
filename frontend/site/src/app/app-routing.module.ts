import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { ModifProfileComponent } from './modif-profile/modif-profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: LoginComponent },
  { path: 'profile', component: ModifProfileComponent }
=======
import { AuthGuard } from './guard';


const routes: Routes = [
  {
    path: '',

    component: HomeComponent
    //canActivate: [AuthGuard]
},
{
    path: 'login',
    component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }
>>>>>>> 9c17d50e3f8a91d72d5fb59db49291a66619cb56
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
