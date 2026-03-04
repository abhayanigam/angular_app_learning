import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainProduct {
  constructor(private http: HttpClient) {
    console.log('Main Product Service is created');
  }

  getMainProduct() {
    const url = 'https://dummyjson.com/products';

    return this.http.get(url);
  }
}
