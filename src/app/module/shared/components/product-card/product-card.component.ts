import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private activateRouter: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    console.log(this.product);
  }
  navigate(productId: number) {
    this.router.navigate(['/product-details/' + productId]);
  }

  route() {
    console.log('product card');
  }
}
