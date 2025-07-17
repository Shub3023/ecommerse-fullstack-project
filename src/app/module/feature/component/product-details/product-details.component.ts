import { Component } from '@angular/core';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { log } from 'console';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  selectedSize: any;
  reviews: any[] = [1, 1, 1, 1, 1];
  relatedProducts: any;
  handleAddToCart() {
    console.log(this.selectedSize);
  }

  ngOnInit(){
    this.relatedProducts = lehngacholiPage2;

  }
}
