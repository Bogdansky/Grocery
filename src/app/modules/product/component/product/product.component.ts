import { Component, Input, OnInit } from '@angular/core';
import { ProductPrice } from 'src/app/models/product-price';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input("product") productPrice!: ProductPrice;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: string){
    alert('You clicked on Scan button with id = ' + id);
  }
}
