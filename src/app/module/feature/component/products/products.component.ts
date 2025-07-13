import { Component } from '@angular/core';
import { filters } from './filterData';
import { singleFilter } from './filterData';
import { mensPantsPage1 } from '../../../../../Data/pants/men_page1';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  filterData: any;
  singleFilterData: any;
  menPants: any;

  constructor(private activateRouter: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;
    console.log(this.filterData);
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activateRouter.snapshot.queryParams };

    const filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];

    const valueIndex = filterValues.indexOf(value);

    if (valueIndex !== -1) {
      filterValues.splice(valueIndex, 1);
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',');
    } else {
      delete queryParams[sectionId];
    }

    this.router.navigate([], {
      queryParams,
      // queryParamsHandling: 'merge' // optional: uncomment to merge with existing
    });

    console.log(queryParams);
  }

  handleSingleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activateRouter.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([], {
      queryParams,
      // queryParamsHandling: 'merge' // optional
    });
  }
}
