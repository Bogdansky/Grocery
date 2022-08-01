import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card'

import { ProductModule } from '../product/product.module';
import { ProductsComponent } from './component/products.component';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ProductModule,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
