import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { homeCarouselData } from '../../../Data/mainCarousel';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'], // ✅ fixed
})
export class MainCarouselComponent implements OnInit, OnDestroy {
  carouselData: any = [];
  currentSlide: number = 0;
  interval: any;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.carouselData = homeCarouselData;
    if (this.isBrowser) {
      this.autoPlay();
    }
  }

  autoPlay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
