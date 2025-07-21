import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() showButton: any;
  constructor() {}

  ngOnInit() {}

  updateCartItem(num: number) {
    console.log(num);
  }

  removeCartItem() {
    console.log('remvoed cart item');
  }
}
