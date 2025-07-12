import { Component } from '@angular/core';
import { filters } from './filterData';
import { singleFilter } from './filterData';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  filterData: any;
  singleFilterData: any;

  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    console.log(this.filterData);
  }
}
