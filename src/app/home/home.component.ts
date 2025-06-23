import { Component } from '@angular/core';
import { menJeans } from '../../Data/Men/men_jeans';
import { lengha_page1 } from '../../Data/Women/LenghaCholi';
import { gounsPage1 } from '../../Data/Gouns/gouns';
import { kurtaPage1 } from '../../Data/Kurta/kurta';
import { mensShoesPage1 } from '../../Data/shoes/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: any;
  womenGaouns: any;
  legaCholi: any;
  mensKurta: any;
  mensShoes: any;
  ngOnInit() {
    this.products = menJeans.slice(0, 5);
    this.womenGaouns = gounsPage1.slice(0, 5);
    this.legaCholi = lengha_page1.slice(0, 5);
    this.mensKurta = kurtaPage1.slice(0, 5);
    this.mensShoes = mensShoesPage1.slice(0, 5);
  }
}
