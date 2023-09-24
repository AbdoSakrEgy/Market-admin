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
  createProduct(model: any) {
    return this.http.post(this.baseURL + 'products', model);
  }
  updateProduct(model: any, id: number) {
    return this.http.put(this.baseURL + 'products/' + id, model);
  }
}
