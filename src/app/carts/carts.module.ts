import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { SharedModule } from '../shared/shared.module';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

@NgModule({
  declarations: [CartsComponent, CartDetailsComponent],
  imports: [CommonModule, SharedModule],
})
export class CartsModule {}
