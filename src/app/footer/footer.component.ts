import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
