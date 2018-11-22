import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quotes = [
    'Why be sober when you could be high?',
    'You see officer, I was definitely going no faster than the speed limit!',
    'RGB god',
    'M-my left hand counts as a girlfriend r-right?',
    'Hey, at least I don\'t do xans!',
    'I like damaged Jewish girls don\'t @ me',
    'He drives an ST? What a pleb smh',
    'I\'m not a virgin, I\'m an experienced asexual'
  ];
  quoteIndex = 0;

  ngOnInit() {
    this.quoteIndex = Math.floor(Math.random() * this.quotes.length);
  }

  nextQuote() {
    this.quoteIndex = (this.quoteIndex + 1) % this.quotes.length;
  }
}
