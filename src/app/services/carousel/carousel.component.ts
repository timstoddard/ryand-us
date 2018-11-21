import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slide', [
      state('0', style({ transform: 'translate3d(0px,0px,0px)' })),
      state('1', style({ transform: 'translate3d(-600px,0px,0px)' })),
      state('2', style({ transform: 'translate3d(-1200px,0px,0px)' })),
      state('3', style({ transform: 'translate3d(-1800px,0px,0px)' })),
      transition('* => *', [animate('0.35s')])
    ])
  ]
})
export class CarouselComponent {
  @Input() items = [];
  currentItemIndex = 0;

  next() {
    if (this.currentItemIndex < this.items.length - 1) {
      this.currentItemIndex++;
    }
  }

  prev() {
    if (this.currentItemIndex > 0) {
      this.currentItemIndex--;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.currentItemIndex = index;
    }
  }
}
