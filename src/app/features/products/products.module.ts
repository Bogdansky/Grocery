import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card'

import { ProductModule } from '../product/product.module';
import { ProductsComponent } from './component/products.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ProductModule,
    MaterialModule,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
