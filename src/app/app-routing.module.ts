import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/components/carts/carts.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartDetailsComponent } from './carts/components/cart-details/cart-details.component';
import { ProductsComponent } from './products/components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', title: 'products', component: ProductsComponent },
  { path: 'carts', title: 'carts', component: CartsComponent },
  {
    path: 'carts/cart-details/:id',
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
