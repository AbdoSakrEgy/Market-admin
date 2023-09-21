import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  categories: string[] = [];
  products: any[] = [];
  isLoading: boolean = true;

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.getAllCategories();
    this.getAllProducts();
  }
  getAllCategories() {
    this.isLoading = true;
    this.productsService.getAllCategories().subscribe((res: any) => {
      this.categories = res;
      this.isLoading = false;
    });
  }
  filterCategory(event: any) {
    this.isLoading = true;
    if (event.target.value === 'all') {
      this.getAllProducts();
    } else {
      this.productsService
        .filterCategory(event.target.value)
        .subscribe((res: any) => {
          this.products = res;
          this.isLoading = false;
        });
    }
  }
  getAllProducts() {
    this.isLoading = true;
    this.productsService.getAllProducts().subscribe((res: any) => {
      this.products = res;
      this.isLoading = false;
    });
  }
}
