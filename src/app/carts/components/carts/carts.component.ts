import { Component } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent {
  carts: any[] = [];
  formDate!: FormGroup;
  isLoading: boolean = false;

  constructor(private cartsService: CartsService, private fb: FormBuilder) {}
  ngOnInit() {
    this.getAllCarts();
    this.formDate = this.fb.group({
      startDate: [''],
      endDate: [''],
    });
  }
  getAllCarts() {
    this.isLoading = true;
    this.cartsService.getAllCarts().subscribe((res: any) => {
      this.carts = res;
      this.isLoading = false;
    });
  }
  filterCartsByDate() {
    let dateObj = this.formDate.value;
    this.cartsService.filterCartsByDate(dateObj).subscribe((res: any) => {
      this.carts = res;
    });
  }
  deleteCart(cartID: number) {
    this.cartsService.deleteCart(cartID).subscribe((res: any) => {
      alert('cart deleted success');
    });
  }
}
