import { Component } from '@angular/core';

@Component({
  selector: 'app-getter-setter-functions',
  imports: [],
  templateUrl: './getter-setter-functions.html',
  styleUrl: './getter-setter-functions.scss',
})
export class GetterSetterFunctions {
  name = "";
  displayName = "";
  email = "";

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = "Abhaya";
  }

  getEmail(val: string) {
    this.email = val;
  }

  setEmail() {
    this.email = "default@gmail.com";
  }
}
