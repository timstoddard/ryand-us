import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slide', [
      state('open', style({
        left: '0',
        opacity: 1
      })),
      state('closed', style({
        left: '-100px',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.25s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  links = [
    { path: '', text: 'home' },
    { path: 'about', text: 'about' },
    { path: 'toby', text: 'toby' },
    { path: 'services', text: 'services' },
  ];

  private ngUnsubscribe = new Subject<void>();

  ngOnInit() {
    fromEvent(window, 'keyup')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          this.hideMenu();
        }
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  hideMenu() {
    this.isMenuOpen = false;
  }
}
