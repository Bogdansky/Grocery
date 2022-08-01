import { Component, OnInit } from '@angular/core';
import { ProductPrice } from 'src/app/models/product-price';
import MockData from 'src/app/shared/mock/mock.data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data: ProductPrice[];

  constructor() { 
    this.data = MockData.products;
  }

  ngOnInit(): void {
    
  }

}
