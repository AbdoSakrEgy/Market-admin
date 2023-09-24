import { Component } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent {
  cartID = this.activatedRoute.snapshot.paramMap.get('id');
  cartProductsIDs: any[] = [];
  cartProductsQuantity: any[] = [];
  cartProducts: any[] = [];
  totalPrice: number = 0;
  isLoading: boolean = false;

  constructor(
    private cartsService: CartsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getCartInfo();
  }
  getCartInfo() {
    this.isLoading = true;
    this.cartProductsIDs = [];
    this.cartsService.getSingleCart(this.cartID).subscribe((res: any) => {
      for (let i = 0; i < res.products.length; i++) {
        this.cartProductsIDs.push(res.products[i].productId);
        this.cartProductsQuantity.push(res.products[i].quantity);
      }
      this.getCartProducts();
    });
  }
  getCartProducts() {
    this.cartProducts = [];
    for (let i = 0; i < this.cartProductsIDs.length; i++) {
      this.cartsService.getProduct(this.cartProductsIDs[i]).subscribe((res) => {
        this.cartProducts.push(res);
        this.getTotalPrice();
        this.isLoading = false;
      });
    }
  }
  getTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice +=
        this.cartProducts[i].price * this.cartProductsQuantity[i];
    }
  }
}
