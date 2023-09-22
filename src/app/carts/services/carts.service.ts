import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  baseURL: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}
  orderProducts(model: any) {
    return this.http.post(this.baseURL + 'carts', { model });
  }
}
