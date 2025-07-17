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

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NavContentComponent, ProductCardComponent, StarRatingComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  exports: [FooterComponent, NavbarComponent, ProductCardComponent, StarRatingComponent],
})
export class SharedModule {}
