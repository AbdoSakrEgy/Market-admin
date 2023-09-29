import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  base64: any = '';

  ngOnInit() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    if (this.data.isUpdateForm) {
      this.showDataInUpdateForm();
    }
  }
  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
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
      this.base64 = '';
      this.productForm.reset();
      this.dialogRef.close();
    });
  }
  showDataInUpdateForm() {
    this.productForm.get('title')?.setValue(this.data.selectedProduct.title);
    this.productForm.get('price')?.setValue(this.data.selectedProduct.price);
    this.productForm
      .get('description')
      ?.setValue(this.data.selectedProduct.description);
    this.productForm.get('image')?.setValue(this.data.selectedProduct.image);
    this.base64 = this.data.selectedProduct.image;
    this.productForm
      .get('category')
      ?.setValue(this.data.selectedProduct.category);
  }
  updateProduct() {
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
    this.productsService
      .updateProduct(model, this.data.selectedProduct.id)
      .subscribe((res) => {
        alert('The product has been updated successfully');
        this.dialogRef.close();
      });
  }
}
