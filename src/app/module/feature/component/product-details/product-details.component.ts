import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  selectedSize: any;
  reviews: any[] = [1, 1, 1, 1, 1];
  handleAddToCart() {
    console.log(this.selectedSize);
  }
}
