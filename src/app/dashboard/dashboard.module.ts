import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './page/home/home.component';
import { AddMenuComponent } from './page/add-menu/add-menu.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { ShowProductsComponent } from './page/show-products/show-products.component';
import { ShowCommandsComponent } from './page/show-commands/show-commands.component';
import { ShowMenusComponent } from './page/show-menus/show-menus.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { StorageModule } from '@angular/fire/storage';
import { ModifyMenuComponent } from './page/show-menus/modify-menu/modify-menu.component';
import { ModifyProductComponent } from './page/show-products/modify-product/modify-product.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AsideComponent,
    HeaderComponent,
    HomeComponent,
    AddMenuComponent,
    AddProductComponent,
    ShowProductsComponent,
    ShowCommandsComponent,
    ShowMenusComponent,
    ModifyMenuComponent,
    ModifyProductComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    StorageModule,
    MatDialogModule
  ]
})
export class DashboardModule { }
