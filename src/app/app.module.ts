import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TobyComponent } from './toby/toby.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { CarouselComponent } from './services/carousel/carousel.component';
import { DotsComponent } from './services/carousel/dots/dots.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TobyComponent,
    ServicesComponent,
    HomeComponent,
    CarouselComponent,
    DotsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
