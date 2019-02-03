import { Component } from '@angular/core';

@Component({
  selector: 'cg-root',
  template: `
    <cg-header></cg-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
