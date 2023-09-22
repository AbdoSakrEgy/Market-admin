import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [AllProductsComponent, ProductComponent, ProductDetailsComponent],
})
export class ProductsModule {}
