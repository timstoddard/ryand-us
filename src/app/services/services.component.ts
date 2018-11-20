import { Component } from '@angular/core';

interface CarouselItem {
  src: string;
  text: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  carouselItems: CarouselItem[] = [
    {
      src: 'assets/images/ryan-therapy.jpg',
      text: 'Emotional Support',
    },
    {
      src: 'assets/images/ryan-dog.jpg',
      text: 'Dog Walking',
    },
    {
      src: 'assets/images/ryan-auto.jpg',
      text: 'Automotive Repair',
    },
    {
      src: 'assets/images/brojob.jpg',
      text: 'Brojobs',
    },
  ];
}
