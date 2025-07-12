import { Component, Input } from '@angular/core';
import { navigation } from './nav-content';
import { log } from 'console';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss',
})
export class NavContentComponent {
  category: any;
  index!: number;
  @Input() selectedSection: any;

  ngOnInit() {
    this.category = navigation;
    console.log(this.selectedSection)
    if(this.selectedSection == 'men'){
      this.index = 1;
    }
    else if(this.selectedSection == 'women'){
      this.index = 0;
    }
    console.log(this.category);
    
    
  }
}
