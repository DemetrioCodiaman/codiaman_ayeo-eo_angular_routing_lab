import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Required for *ngIf
import { RouterOutlet, RouterLinkActive, RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterModule, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-child-routes-example';
  currentTime = new Date();
  imageURL = 'https://i.guim.co.uk/img/media/dd703cd39013271a45bc199fae6aa1ddad72faaf/0_0_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=178a9434c272d5a067353f57a30f58ed';
  isDisabled = true;
  clickCount = 0;
  name = '';
  email = ''
  age = ''
  address = ''
  ehtnicity = ''
  
  showModal = false;  // Controls modal visibility

  incrementCount() {
    this.clickCount++;
  }

  onInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

  toggleModal() {
    this.showModal = !this.showModal;
    console.log("Modal status:", this.showModal); 
  }
}
