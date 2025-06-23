import { Component, Input } from '@angular/core';
import { menJeans } from '../../../Data/Men/men_jeans';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss',
})
export class ProductSliderComponent {
  @Input() title: any;
  @Input() products:any;

}
