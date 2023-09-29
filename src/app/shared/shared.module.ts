import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialuiModule } from '../materialui/materialui.module';
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
    MaterialuiModule,
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule,
    SpinnerComponent,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialuiModule,
  ],
})
export class SharedModule {}
