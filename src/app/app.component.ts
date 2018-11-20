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
}
