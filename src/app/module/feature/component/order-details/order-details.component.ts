import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent {
  orders: any[] = [1, 2, 21, 23];
  steps: any[] = [
    { id: 0, title: 'PLACED', isCompleted: true },
    { id: 1, title: 'CONFIRMED', isCompleted: false },
    { id: 2, title: 'SHIFT', isCompleted: false },
    { id: 3, title: 'DELIVERED', isCompleted: false },
  ];
}
