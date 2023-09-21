import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productID: any;
  productData: any = {};
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private products: ProductsService
  ) {}
  ngOnInit() {
    this.productID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProductByID();
  }
  getProductByID() {
    this.isLoading = true;
    this.products.getProductByID(this.productID).subscribe((res: any) => {
      this.productData = res;
      this.isLoading = false;
    });
  }
}
