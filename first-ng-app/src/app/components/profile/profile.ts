import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  constructor(private route: ActivatedRoute) { }

  userName = '';
  ngOnInit(): void {
    // Method 1: Accessing the passed data from the Home component using ActivatedRoute
    // let name = this.route.snapshot.paramMap.get('name');
    // this.userName = name || '';
    // console.log(`Received name from Home component: ${name}`);

    // Method 2 : Using query parameters to access the passed data from the Home component using ActivatedRoute
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'] || '';
      console.log(`Received name from Home component via query params: ${this.userName}`);
    });

  }
  // Accessing the passed data from the Home component using ActivatedRoute}
}