import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counterValue = signal(0);

  increament(){
    // Method 1:
    // this.counterValue++;

    // Method 2:
    // this.counterValue.set(this.counterValue() + 1);

    // Method 3:
    this.counterValue.update(value => value + 1);
  }

  decreament(){
    this.counterValue.update(value => value - 1);
  }

  reset(){
    this.counterValue.set(0);
  }
}
