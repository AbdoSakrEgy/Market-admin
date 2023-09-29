import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [ProductDetailsComponent, ProductsComponent, ProductFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductsComponent, ProductDetailsComponent],
})
export class ProductsModule {}
