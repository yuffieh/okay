import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";


@Component({
  selector: 'main-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <nav>
  	<base href="/">
  </nav>
  	<router-outlet></router-outlet>
  
  
  `
  
  
})
export class Main { }

