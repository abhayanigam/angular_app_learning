import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.html',
  styleUrl: './person.scss',
})
export class Person {
  name = 'John Doe';

  @Input()
  personCounter = 0;

  constructor() {
    console.log('Person component created');
    this.name = 'Janny';
  }

  ngOnInit() {
    console.log('Person component initialized');
    this.name = 'Jeniffer';
  }

  ngOnDestroy() {
    console.log('Person component destroyed');
  }

  ngOnChanges() {
    console.log('Person component changed');
  }

  ngDoCheck() {
    console.log('Person component checked');
  }

}