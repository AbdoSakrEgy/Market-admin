import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseURL: string = 'https://fakestoreapi.com/';
  cart: any[] = [];

  constructor(private http: HttpClient) {}
  getAllCategories() {
    return this.http.get(this.baseURL + 'products/categories');
  }
  filterCategory(category: any) {
    return this.http.get(this.baseURL + 'products/category/' + category);
  }
  getAllProducts() {
    return this.http.get(this.baseURL + 'products');
  }
  getProductByID(id: any) {
    return this.http.get(this.baseURL + 'products/' + id);
  }
  addProductToCart(addedProduct: any, addedQuantity: any) {
    // if ('cart' in localStorage) {
    //   this.cart = JSON.parse(localStorage.getItem('cart'));
    //   this.cart.push({ product: addedProduct, quantity: addedQuantity });
    //   localStorage.setItem('cart', JSON.stringify(this.cart));
    // } else {
    // }
    return this.cart;
  }
}
