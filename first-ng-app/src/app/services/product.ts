import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor() {
    console.log('Product Service is created');
  }

  getProduct() {
    return [{
      id: 1,
      name: 'Product 1',
      price: 100,
    }, {
      id: 2,
      name: 'Product 2',
      price: 200,
    }, {
      id: 3,
      name: 'Product 3',
      price: 300,
    }, {
      id: 4,
      name: 'Product 4',
      price: 400,
    }, {
      id: 5,
      name: 'Product 5',
      price: 500,
    }];
  }
}
