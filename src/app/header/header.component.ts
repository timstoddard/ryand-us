import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
        animate('0.4s')
      ]),
      transition('closed => open', [
        animate('0.4s')
      ]),
    ]),
  ],
})
export class HeaderComponent {
  isMenuOpen = false;
  links = [
    { path: '', text: 'home' },
    { path: 'about', text: 'about' },
    { path: 'toby', text: 'toby' },
    { path: 'services', text: 'services' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
