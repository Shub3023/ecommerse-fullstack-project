import { Component } from '@angular/core';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  selectedSize: any;
  reviews: any[] = [1, 1, 1, 1, 1];
  relatedProducts: any;

  constructor(private router: Router){

  }
  ngOnInit(){
    this.relatedProducts = lehngacholiPage2;
  }

    handleAddToCart() {
    console.log(this.selectedSize);
    this.router.navigate(['cart'])
  }

  
}
