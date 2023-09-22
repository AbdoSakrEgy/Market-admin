import { Component } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: any[] = [];
  numOfItemsInCart: number = 0;
  totalPrice: number = 0;
  isOrderSuccess: boolean = false;

  constructor(private cartsService: CartsService) {}
  ngOnInit() {
    this.getProductsInCart();
    this.getNumOfItemsInCart();
    this.getTotalPrice();
  }
  getProductsInCart() {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    } else {
      this.cart = [];
    }
    this.getTotalPrice();
  }
  getNumOfItemsInCart() {
    this.numOfItemsInCart = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.numOfItemsInCart += this.cart[i].quantity;
    }
  }
  getTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.totalPrice += this.cart[i].product.price * this.cart[i].quantity;
    }
  }
  clearCart() {
    if ('cart' in localStorage) {
      localStorage.removeItem('cart');
      this.getProductsInCart();
      this.getTotalPrice();
    }
  }
  deleteProductInCart(index: any) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.getTotalPrice();
  }
  incQuantity(index: any) {
    this.cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.getNumOfItemsInCart();
    this.getTotalPrice();
  }
  decQuantity(index: any) {
    this.cart[index].quantity--;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.getNumOfItemsInCart();
    this.getTotalPrice();
  }
  changeQuantity() {
    this.getTotalPrice();
  }
  orderProducts() {
    let userID = 43;
    let date = new Date();
    let productsArr = this.cart.map((obj) => {
      return {
        productId: obj.product.id,
        quantity: obj.quantity,
      };
    });
    let model = {
      userId: userID,
      date: date,
      products: productsArr,
    };
    this.cartsService.orderProducts(model).subscribe((res) => {
      this.isOrderSuccess = true;
    });
  }
}
