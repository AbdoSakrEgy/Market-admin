import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  categories: string[] = [];
  isLoading: boolean = false;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
  }
  getAllProducts() {
    this.isLoading = true;
    this.productsService.getAllProducts().subscribe((res: any) => {
      this.products = res;
      this.isLoading = false;
    });
  }
  getAllCategories() {
    this.productsService.getAllCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }
  openDialog(product?: any) {
    let isUpdateForm = false;
    if (product) {
      isUpdateForm = true;
    }
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: {
        categories: this.categories,
        selectedProduct: product,
        isUpdateForm: isUpdateForm,
      },
      width: '90%',
    });
    dialogRef.afterClosed().subscribe((res) => {
      // console.log(res);
    });
  }
}
