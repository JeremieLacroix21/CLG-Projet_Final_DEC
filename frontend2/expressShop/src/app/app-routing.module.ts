import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeModule} from './home/home.module';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
