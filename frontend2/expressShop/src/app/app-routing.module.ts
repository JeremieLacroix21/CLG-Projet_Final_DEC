import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard';
const routes: Routes = [
  {
    path: 'home',
    //canActivate: [AuthGuard],
    loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',
    //canActivate: [AuthGuard],
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
