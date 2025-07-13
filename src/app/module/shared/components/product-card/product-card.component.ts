import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: any;
  
  constructor(private activateRouter: ActivatedRoute){

  }
  ngOnInit() {
    console.log(this.product);
  }

}
