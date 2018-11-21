import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  quotes = [
    'Why be sober when you could be high?',
    'You see officer, I was definitely going no faster than the speed limit!',
    'RGB god',
    'M-my left hand counts as a girlfriend r-right?',
    'Hey, at least I don\'t do xans!',
  ];
  quoteIndex = 0;

  nextQuote() {
    this.quoteIndex = (this.quoteIndex + 1) % this.quotes.length;
  }
}
