import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
maxRating = 5;
intialRating =3;
stars:any;
currentRating=0;

constructor(){
  this.stars = Array(this.maxRating).fill(0).map((_,i)=>i+1);
  this.currentRating = this.intialRating;
}

rate(rating:number){
this.currentRating = rating;
}
}
