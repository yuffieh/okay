import { NgModule }      from '@angular/core';
import { routing } from './routes/app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent }  from './landing/landing.component';
import { AboutComponent }  from './about/about.component';
import { Main }  from './main.component';
import { NavComponent }  from './routes/nav.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ Main, LandingComponent, AboutComponent, NavComponent  ],
  bootstrap:    [ Main ]
})
export class AppModule { }

