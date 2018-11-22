import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TobyComponent } from './toby/toby.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animationState: 'home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animationState: 'about' }
  },
  {
    path: 'toby',
    component: TobyComponent,
    data: { animationState: 'toby' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animationState: 'services' }
  },
];
