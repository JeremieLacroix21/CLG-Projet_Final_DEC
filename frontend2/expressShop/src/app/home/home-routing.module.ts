import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { ModifProfileComponent } from './modif-profile/modif-profile.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SupplierInfosComponent } from './supplier-infos/supplier-infos.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CommandeComponent } from './commande/commande.component';
import { UserTypeGuard } from '../guard/user-type.guard';
import { ADMIN, SUPPLIER, DISTRIB } from '../models/user';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [AuthGuard, UserTypeGuard],
    children: [
      { path: '', redirectTo: 'browseProduct' },
      { path: 'browseProduct', component: BrowseProductsComponent },
      { path: 'modifprofile', component: ModifProfileComponent, data: {allowed: [DISTRIB, SUPPLIER, ADMIN]} },
      { path: 'shoppingCart', component: ShoppingCartComponent, data: {allowed: [DISTRIB]} },
      { path: 'admin-users', component: AdminUsersComponent, data: {allowed: [ADMIN]} },
      { path: 'supplierInfos', component: SupplierInfosComponent, data: {allowed: [DISTRIB, SUPPLIER, ADMIN]} },
      { path: 'add-product', component: AddProductComponent, data: {allowed: [SUPPLIER, ADMIN]} },
      { path: 'commande', component: CommandeComponent, data: {allowed: [SUPPLIER, DISTRIB]} }
    ]
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
