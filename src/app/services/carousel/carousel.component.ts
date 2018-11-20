import { Component, QueryList, ContentChildren, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() items = [];
  currentItemIndex = 0;

  next() {
    this.currentItemIndex = (this.currentItemIndex + 1) % this.items.length;
  }

  prev() {
    this.currentItemIndex = (this.currentItemIndex - 1 + this.items.length) % this.items.length;
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.currentItemIndex = index;
    }
  }
}
