import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('first-ng-app');
}


/*
Note :
RouterOutlet:
  a directive that acts as a placeholder or a viewport in a component's template. 
  It is a crucial part of the Angular Router module, dynamically loading and rendering 
  components based on the application's current URL route and configuration.
*/