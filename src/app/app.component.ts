import { Component } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

import { standardTransitionTime } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1 }),
          animate(standardTransitionTime, style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          animate(standardTransitionTime, style({ opacity: 1 }))
        ], { optional: true })
      ]),
    ]),
  ],
})
export class AppComponent {
  iconLinks = [
    {
      href: 'https://www.linkedin.com/in/ryandriggett',
      icon: 'assets/icons/linkedin.svg'
    },
    {
      href: 'https://www.facebook.com/rdrigg',
      icon: 'assets/icons/facebook.svg'
    },
    {
      href: 'https://www.instagram.com/rdriggett',
      icon: 'assets/icons/instagram.svg'
     }
  ];

  getAnimationState(o: RouterOutlet) {
    return o.isActivated
      ? o.activatedRouteData.animationState
      : '';
  }
}
