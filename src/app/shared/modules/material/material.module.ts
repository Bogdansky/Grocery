import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

const material = [
  MatCardModule, MatButtonModule, MatExpansionModule, 
  MatDividerModule, MatSnackBarModule, MatToolbarModule, 
  MatIconModule, MatSidenavModule
];

@NgModule({
  exports: [
    ...material
  ]
})
export class MaterialModule { }