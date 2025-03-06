import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = {
    name: 'John Doe',
    description: 'Discover amazing products and experiences.'
  };

  navigateToAbout() {
    console.log('Navigating to About Page...');
    // You can use Angular Router here
  }
}