import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  baseURL: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}
  getAllCarts() {
    return this.http.get(this.baseURL + 'carts');
  }
  filterCartsByDate(dateObj: any) {
    const params = new HttpParams()
      .set('startdate', dateObj.startDate)
      .set('enddate', dateObj.endDate);
    return this.http.get(this.baseURL + 'carts', { params });
  }
  deleteCart(cartID: any) {
    return this.http.delete(this.baseURL + 'carts/' + cartID);
  }
}
