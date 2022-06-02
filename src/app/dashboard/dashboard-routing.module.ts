import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddMenuComponent } from './page/add-menu/add-menu.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { HomeComponent } from './page/home/home.component';
import { ShowCommandsComponent } from './page/show-commands/show-commands.component';
import { ShowMenusComponent } from './page/show-menus/show-menus.component';
import { ShowProductsComponent } from './page/show-products/show-products.component';

const routes: Routes = [
  { path: '',
  component: DashboardComponent ,
  children: [
    { path: '', component: ShowMenusComponent },
    { path: 'commands', component: ShowCommandsComponent },
    { path: 'add-menu', component: AddMenuComponent },
    { path: 'menus', component: ShowMenusComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'products', component: ShowProductsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
