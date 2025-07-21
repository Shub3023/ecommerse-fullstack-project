import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  constructor(private router: Router) {}
  orders: any[] = [
    [1, 1],
    [1, 2, 1],
  ];
  orderFilter = [
    { value: 'on_the_way', label: 'On The Way' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'returned', label: 'Returned' },
  ];

  navigateToOrderDetails = () => {
    this.router.navigate([`order-details/{id}`]);
  };
}
