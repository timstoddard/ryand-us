import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { animate, style, AnimationBuilder } from '@angular/animations';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() items = [];
  @ViewChild('carousel') carousel;
  @ViewChild('slideWrapper') slideWrapper;
  currentItemIndex = 0;

  private ngUnsubscribe = new Subject<void>();
  private slideWidth = 0;

  constructor(private animationBuilder: AnimationBuilder) {}

  ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.updateSlideWidth());
  }

  ngAfterViewInit() {
    this.updateSlideWidth();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
  }

  doSlide(prevIndex: number, currIndex: number, duration = 250) {
    const oldX = -1 * prevIndex * this.slideWidth;
    const newX = -1 * currIndex * this.slideWidth;
    this.animationBuilder
      .build([
        style({ transform: `translate3d(${oldX}px,0px,0px)` }),
        animate(duration, style({ transform: `translate3d(${newX}px,0px,0px)` }))
      ])
      .create(this.slideWrapper.nativeElement)
      .play();
  }

  next() {
    if (this.currentItemIndex < this.items.length - 1) {
      this.currentItemIndex++;
      this.doSlide(this.currentItemIndex - 1, this.currentItemIndex);
    }
  }

  prev() {
    if (this.currentItemIndex > 0) {
      this.currentItemIndex--;
      this.doSlide(this.currentItemIndex + 1, this.currentItemIndex);
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.items.length) {
      const prevIndex = this.currentItemIndex;
      this.currentItemIndex = index;
      this.doSlide(prevIndex, this.currentItemIndex);
    }
  }

  private updateSlideWidth() {
    this.slideWidth = this.carousel.nativeElement.getBoundingClientRect().width;
    this.doSlide(0, this.currentItemIndex, 0);
  }
}
