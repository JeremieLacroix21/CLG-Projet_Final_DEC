import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { ModifProfileComponent } from './modif-profile/modif-profile.component';
import { FournisseurListeComponent } from './fournisseur-liste/fournisseur-liste.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'browseProduct'
      },
      {
        path: 'browseProduct',
        component: BrowseProductsComponent
      },
      {
        path: 'modifprofile',
        component: ModifProfileComponent
      },
      {
        path: 'fournisseurListe',
        component: FournisseurListeComponent
      },
      {
        path: 'shoppingCart',
        component: ShoppingCartComponent
      },
      {
        path: 'admin-users',
        component: AdminUsersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
