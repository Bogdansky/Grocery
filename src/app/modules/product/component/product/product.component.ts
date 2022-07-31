import { Component, Input, OnInit } from '@angular/core';
import { ProductPrice } from 'src/app/models/product-price';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input("product") productPrice!: ProductPrice;
  scanningCount: number = 0;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClick(id: string){
    const message = 'You clicked on Scan button with id = ' + id;

    this._snackBar.open(message, 'X');
    this.scanningCount++;
  }
}
