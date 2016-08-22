import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
	{
    path: '',
    component: LandingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];


export const routing = RouterModule.forRoot(appRoutes);

