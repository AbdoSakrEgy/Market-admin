import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule,
    SpinnerComponent,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class SharedModule {}
