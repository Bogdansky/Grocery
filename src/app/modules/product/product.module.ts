import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product/product.component';

import { MaterialModule } from 'src/shared/modules/material/material.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ProductComponent,
  ]
})
export class ProductModule { }
