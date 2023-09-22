import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() productData: any = {};
  showAmount: boolean = false;
  quantity: any;
  cart: any[] = [];

  addToCart() {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this.cart.push({
        product: this.productData,
        quantity: this.quantity,
      });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      this.cart.push({
        product: this.productData,
        quantity: this.quantity,
      });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
