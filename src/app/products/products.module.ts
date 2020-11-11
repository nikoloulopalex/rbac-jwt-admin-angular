import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class ProductsModule { }
