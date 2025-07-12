import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './component/feature.component';
import { HomeComponent } from './component/home/home.component';
import { MainCarouselComponent } from './component/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './component/home/product-slider/product-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HomeProductCardComponent } from './component/home/home-product-card/home-product-card.component';
import { ProductsComponent } from './component/products/products.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule, MatCheckboxModule ],
  exports: [FeatureComponent, HomeComponent, ProductsComponent],
})
export class FeatureModule {}
