import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModifProfileComponent } from './modif-profile/modif-profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: LoginComponent },
  { path: 'profile', component: ModifProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
