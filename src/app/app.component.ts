import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    { path: '', text: 'home' },
    { path: 'about', text: 'about' },
    { path: 'toby', text: 'toby' },
    { path: 'services', text: 'services' },
  ];
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
}
