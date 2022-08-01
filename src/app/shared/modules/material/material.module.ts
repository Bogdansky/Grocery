import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const material = [MatCardModule, MatButtonModule, MatExpansionModule, MatDividerModule, MatSnackBarModule]

@NgModule({
  exports: [
    ...material
  ]
})
export class MaterialModule { }