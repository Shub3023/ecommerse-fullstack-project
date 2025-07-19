import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
 constructor(){

 }

 ngOnInit(){

 }

 updateCartItem(num:number){
  console.log(num);
 }

 removeCartItem(){
  console.log("remvoed cart item");
  
 }
}
