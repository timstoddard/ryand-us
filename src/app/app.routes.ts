import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TobyComponent } from './toby/toby.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'toby',
    component: TobyComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
];
