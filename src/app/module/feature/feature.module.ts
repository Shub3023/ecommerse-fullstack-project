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
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from "../shared/shared.module";
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { OrderComponent } from './component/order/order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { FormsModule } from '@angular/forms';
import { ProductReviewCardComponent } from './component/product-details/product-review-card/product-review-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductReviewCardComponent
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule, MatCheckboxModule, MatRadioModule, SharedModule, FormsModule, MatProgressBarModule],
  exports: [FeatureComponent, HomeComponent, ProductsComponent],
})
export class FeatureModule {}
