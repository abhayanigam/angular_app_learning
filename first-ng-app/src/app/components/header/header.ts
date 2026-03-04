import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // title = signal('My First Angular App');
  // Or
  title = 'My First Angular App';
}


/*Note :
signal:
  Signals in angular are a way to store a 
  value and automatically update the UI that value changes.
*/