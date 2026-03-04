import { Product } from './../services/product';
import { Component, signal, effect, ViewChild, afterEveryRender } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';
import { GetterSetterFunctions } from '../components/getter-setter-functions/getter-setter-functions';
import { email } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Profile } from '../components/profile/profile';
import { CurrencyConvertorPipe } from '../pipes/currency-convertor-pipe';
import { Person } from '../components/person/person';
import { MainProduct } from '../services/main-product';
import { Admin } from '../components/admin/admin';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet, Greeting, Counter, GetterSetterFunctions, FormsModule, NgFor, CommonModule, CurrencyConvertorPipe, Person,],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Signal for the message displayed in the Home component or Parent component
  message = signal('Hello from Home Component!');

  // Event Listener for keyup event on the input field
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed a key, ${event.key} with key code ${event.keyCode}`);
  }

  // If Else Condition Example
  display = true;
  toggleDiv = true;
  x = 9;

  hide() {
    this.display = false;
  }

  show() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }

  toggleDivTow() {
    this.toggleDiv = !this.toggleDiv;
  }

  // Else if | Control Flow
  color = 100;

  changeColor(value: number) {
    this.color = value;
  }

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.color = Number(input.value);
  }

  // For Loop Example
  userName = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  students = [
    { name: "Alice", age: 20, email: "alice@example.com" },
    { name: "Bob", age: 22, email: "bob@example.com" },
    { name: "Charlie", age: 19, email: "charlie@example.com" },
    { name: "David", age: 21, email: "david@example.com" },
    { name: "Eve", age: 20, email: "eve@example.com" }
  ];

  // Effect :
  // Effect is used for signal mostly used inside the constructor and whenever ant signal
  // gets updated you will get an indication inside the effect, you will get a notification
  // that something has been updated inside the signal here

  name = signal('Angular');
  count = signal(0);
  displayHeading = false;

  constructor(private router: Router, private product: Product, private mainProduct: MainProduct) {

    afterEveryRender(() => {
      console.log('This will be called after the component has been rendered');
    })

    // Effect for the name signal
    // effect(() => {
    //   console.log(`The name signal has been updated to: ${this.name()}`);
    // });

    effect(() => {
      if (this.count() == 2) {
        this.displayHeading = true;
        setTimeout(() => {
          this.displayHeading = false;
        }, 2000);
      } else {
        this.displayHeading = false;
      }
    });
  }

  toggleValue() {
    this.count.set(this.count() + 1);
  }

  // What are contextual variables in angular?
  // Variables that are available within a for loop.

  // Tow Way Data Binding Example
  email = '';
  changeEmail(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  // What is Directives in Angular?
  //  1. Directive is a class that adds additional behaviour to elements in your application.
  //  2. A feature in angular that help you to provide more power to DOM elements. 
  // Example :
  // 1. Structural Directives : *ngIf, *ngFor, *ngSwitch
  // 2. Attribute Directives : ngClass, ngStyle, ngModel
  // 3. if else condition, For loop, Add Style.

  // Types of Directives :
  // 1. Component Directives : A directive with a template.
  // 2. Structural Directives : A directive that changes the structure of the DOM.
  // 3. Attribute Directives : A directive that changes the appearance or behaviour of an element,
  //                            component, or another directive.

  studentsList = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  studentsDetails = [
    { id: 1, name: "Alice", age: 20, email: "alice@gmail.com" },
    { id: 2, name: "Bob", age: 22, email: "bob@gmail.com" },
    { id: 3, name: "Charlie", age: 19, email: "charlie@gmail.com" },
    { id: 4, name: "David", age: 21, email: "david@gmail.com" },
    { id: 5, name: "Eve", age: 20, email: "eve@gmail.com" }
  ];

  // Dynamic Routing in Angular:
  // Passing Data between Pages or Components in Angular :
  // For Method 2 : Constructor Injection of Router and using navigate method to pass data to the profile component.
  // constructor(private router: Router) { }
  goToProfile() {
    // Navigate to the profile page with a name parameter
    // This assumes you have a router instance available in your component
    // Example using Router.navigate with parameters:
    this.router.navigate(['profile'], { queryParams: { name: 'Johnny' } });
  }

  // Pipes in Angular:
  // Pipes are used to transform data in the template or Component. 
  // They are used to format data before displaying it to the user.
  // Example : DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe,
  //           PercentPipe, JsonPipe, SlicePipe, AsyncPipe, TitleCasePipe.
  pipeTitle = "Angular Pipes Example";

  // Creating the Custom Pipe: 
  amount = 10;

  // Life cycle Hooks in Angular:
  // 1. ngOnInit : Called once the component is initialized.
  // 2. ngOnDestroy : Called once the component is destroyed.
  // 3. ngOnChanges : Called when the input properties change.
  // 4. ngDoCheck : Called after every change detection cycle.
  // 5. ngAfterContentInit : Called after the content has been initialized.

  @ViewChild('person') person!: Person; // this is for afterNextRender
  // Now call the constructor for afterRender example
  personCounter = 0;

  incrementPersonCounter() {
    this.personCounter++;
  }

  decrementPersonCounter() {
    this.personCounter--;
  }

  // Services in Angular:
  // Angular Services provide a way for you to seprate angular app data and functions
  // that can be used by multiple components in your application.

  // Note : Add the Service in the constructor of the component Example : See this Class Constructor for Product Service Injection and usage.
  productData: {
    name: string;
    price: number;
    id: number;
  }[] | undefined;

  getProductData() {
    // this.product.getProduct().forEach((item) => {
    //   console.log(`Product ID: ${item.id}, Product Name: ${item.name}, Product Price: ${item.price}`);
    // });
    this.productData = this.product.getProduct();
  }

  // Using the Api Call for Service
  // Note : First add the : provideHttpClient(), in the app.config.ts file and 
  // then inject the HttpClient in the service where you want to make the api
  // call and then use that service in the component where you want to get the 
  // data from the api.

  ProductList: any;
  ngOnInit() {

    // Note: What is subscribe in Angular?
    // Subscribe is a method that is used to subscribe to an Observable. 
    // It is used to get the data from the Observable and to perform some action with the data.

    // In Simple Words : Data that we extract from the api is an asynchronous data, 
    // so we need to subscribe to that data to get the value from the api and then we can use that data in our component.

    this.mainProduct.getMainProduct().subscribe((data: any) => {
      console.log(data);
      this.ProductList = data.products;
    });
  }

  /*
    Route Lazy Loading
    Commonly Known : Whenever you create an application in angular , then all the code of angular gets loaded
    together by default, 

    Lazy Loading : Lazy Loading in angular means loading a feature module only when its route
    is visited , instead of loading everything when the app starts.

    This Improves:
      1. Initial Load Time
      2. Bundle size
      3. Performance for large apps

    Why do we need it?
    Without lazy Loading:
      1. All modules are loaded at startup.
      2. Large apps become slow to load.

    With Lazy Loading:
      1. Only the main module loads first.
      2. Feature modules loads on demand When the user navigate to that route.

    Steps to Build and Deploy an Angular App on LocalHost:
    1. npm i -g http-server
      npm warn deprecated whatwg-encoding@2.0.0: Use @exodus/bytes instead for a more spec-conformant and faster implementation

      added 48 packages in 7s

      15 packages are looking for funding
        run `npm fund` for details
      abhayanigam@Abhayas-MacBook-Pro first-ng-app % ng build
      Initial chunk files | Names         |  Raw size | Estimated transfer size
      chunk-FUXEKL3D.js   | -             | 145.83 kB |                42.52 kB
      main-ODV35W24.js    | main          |  98.65 kB |                25.07 kB
      chunk-X6K6XN3T.js   | -             |  62.66 kB |                15.22 kB
      styles-6HTFNG27.css | styles        |  84 bytes |                84 bytes

                          | Initial total | 307.22 kB |                82.90 kB

      Lazy chunk files    | Names         |  Raw size | Estimated transfer size
      chunk-6SPUHTEX.js   | todos         |   3.52 kB |                 1.38 kB
      chunk-BPHZBQ7K.js   | admin         | 297 bytes |               297 bytes

      Application bundle generation complete. [1.723 seconds] - 2026-03-04T09:03:46.112Z

      Output location: /Users/abhayanigam/Documents/github_repos/angular_app_learning/first-ng-app/dist/first-ng-app

    2. cd dist/first-ng-app/browser 
    3. http-server
        Starting up http-server, serving ./

        http-server version: 14.1.1

        http-server settings: 
        CORS: disabled
        Cache: 3600 seconds
        Connection Timeout: 120 seconds
        Directory Listings: visible
        AutoIndex: visible
        Serve GZIP Files: false
        Serve Brotli Files: false
        Default File Extension: none

        Available on:
          http://127.0.0.1:8080
          http://192.168.1.15:8080
  */
}
