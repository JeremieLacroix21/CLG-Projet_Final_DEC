import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { ModifProfileComponent } from './modif-profile/modif-profile.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowseSuppliersComponent } from './browse-suppliers/browse-supplierscomponent';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SupplierInfosComponent } from './supplier-infos/supplier-infos.component';
import { ProductCardComponent } from './browse-products/product-card/product-card.component';
import { PopUpModule } from '../pop-up component/pop-up.module';

//Angular Material Components
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDividerModule} from '@angular/material/divider';

//other
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component'
import { CommandeComponent } from './commande/commande.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    HomeComponent,
    BrowseProductsComponent,
    ModifProfileComponent,
    BrowseSuppliersComponent,
    ShoppingCartComponent,
    AdminUsersComponent,
    ProductCardComponent,
    SupplierInfosComponent,
    AddProductComponent,
    CommandeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PopUpModule,
    DirectivesModule,

     // material
     MatBadgeModule,
     MatBottomSheetModule,
     MatDividerModule,
     MatCheckboxModule,
     MatCheckboxModule,
     MatButtonModule,
     MatInputModule,
     MatAutocompleteModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatMenuModule,
     MatSidenavModule,
     MatToolbarModule,
     MatListModule,
     MatGridListModule,
     MatCardModule,
     MatStepperModule,
     MatTabsModule,
     MatExpansionModule,
     MatButtonToggleModule,
     MatChipsModule,
     MatIconModule,
     MatProgressSpinnerModule,
     MatProgressBarModule,
     MatDialogModule,
     MatTooltipModule,
     MatSnackBarModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
     //other
     TextMaskModule,
     A11yModule,
     DragDropModule,
     PortalModule,
     ScrollingModule,
     CdkStepperModule,
     CdkTableModule,
     CdkTreeModule,
     MatTreeModule,
     NgxSpinnerModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
