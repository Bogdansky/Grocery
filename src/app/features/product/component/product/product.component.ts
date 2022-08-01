import { Component, Input, OnInit } from '@angular/core';
import { ProductPrice } from 'src/app/models/product-price';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input("product") productPrice!: ProductPrice;
  scanningCount: number = 0;

  constructor(private _snackBar: MatSnackBar,
              private service: ProductsService) { }

  ngOnInit(): void {
  }

  onClick(id: string){
    const positiveMessage = `Product ${id} scanned successfully`;
    const negativeMessage = 'Scanning failed'
    
    try {
      this.service.scanProduct(id).subscribe((res) => {
        if (res.successful) {
          this._snackBar.open(positiveMessage, 'X');
          this.scanningCount++;
        } else {
          this._snackBar.open(negativeMessage, 'X');
        }
    });
    } catch {
      this._snackBar.open(negativeMessage, 'X');
    }
    }
}
