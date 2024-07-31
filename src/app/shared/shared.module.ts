import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[ProductService]
})
export class SharedModule { }
