import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllShopsComponent } from './all-shops/all-shops.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';


const routes: Routes = [
  {
    path: '',
    component: AllShopsComponent
  },
  {
    path: ':id',
    component: ShopProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
