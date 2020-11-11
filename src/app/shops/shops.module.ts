import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { AllShopsComponent } from './all-shops/all-shops.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { ShopProductsComponent } from './shop-products/shop-products.component';


@NgModule({
  declarations: [AllShopsComponent, ShopProductsComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class ShopsModule { }
