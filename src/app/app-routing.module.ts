import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartDetailsComponent } from './carts/components/cart-details/cart-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', title: 'products', component: AllProductsComponent },
  { path: 'carts', title: 'carts', component: CartComponent },
  {
    path: 'cart/cart-details',
    title: 'cart details',
    component: CartDetailsComponent,
  },
  {
    path: 'product-details/:id',
    title: 'product details',
    component: ProductDetailsComponent,
  },
  { path: '**', redirectTo: 'carts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
