import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  name: null | string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const name = params.get('name');
      console.log(`Received id: ${id}, name: ${name}`);
      this.name = name;
      // Getting this data details in the console log to verify 
    });
  }
}
