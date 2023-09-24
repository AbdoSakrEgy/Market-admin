import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any[] = [];
  categories: string[] = [];
  base64: any = '';
  productForm!: FormGroup;
  isProductFormHidden: boolean = true;
  isLoading: boolean = false;
  isUpdateForm: boolean = false;
  selectedProductID!: number;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
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
  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.productForm.get('image')?.setValue('reader.result');
    };
  }
  createProduct() {
    const model = this.productForm.value;
    this.productsService.createProduct(model).subscribe((res) => {
      alert('The product has been added successfully');
      this.productForm.reset();
      this.base64 = '';
      this.isProductFormHidden = true;
    });
  }
  showUpdateForm(product: any) {
    this.isUpdateForm = true;
    this.isProductFormHidden = false;
    this.selectedProductID = product.id;
    this.productForm.get('title')?.setValue(product.title);
    this.productForm.get('price')?.setValue(product.price);
    this.productForm.get('description')?.setValue(product.description);
    this.productForm.get('image')?.setValue(product.image);
    this.base64 = product.image;
    this.productForm.get('category')?.setValue(product.category);
  }
  updateProduct() {
    const id = this.selectedProductID;
    const title = this.productForm.get('title')?.value;
    const price = this.productForm.get('price')?.value;
    const description = this.productForm.get('description')?.value;
    const image = this.productForm.get('image')?.value;
    const category = this.productForm.get('category')?.value;
    const model = {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    };
    this.productsService.updateProduct(model, id).subscribe((res) => {
      alert('The product has been updated successfully');
    });
  }
}
