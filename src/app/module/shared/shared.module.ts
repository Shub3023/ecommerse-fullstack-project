import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { MatDivider } from "@angular/material/divider";

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NavContentComponent, ProductCardComponent, StarRatingComponent, CartItemComponent, AddressCardComponent, OrderTrackerComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule, MatDivider],
  exports: [FooterComponent, NavbarComponent, ProductCardComponent, StarRatingComponent, CartItemComponent, AddressCardComponent, OrderTrackerComponent],
})
export class SharedModule {}
