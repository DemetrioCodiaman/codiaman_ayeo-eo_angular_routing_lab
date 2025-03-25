import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [RouterLink,RouterLinkActive,RouterOutlet,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

  export class AboutComponent {
    /**Interpolation */
    pageTitle = 'HAHA';
    currentTime = new Date();
    /**Property Binding */
    imageUrl = 'images.png';
    isDisabled = true;
    /**Event Binding */
    clickCount = 0;
    incrementCount() {
    this.clickCount++;
    }
    onInput(event: Event) {
      console.log((event.target as HTMLInputElement).value);
      }
      /** Two way Binding */
      name = '';
      email = '';

      submitForm() {
        alert(`Form submitted!\nName: ${this.name}\nEmail:
        ${this.email}`);
        this.resetForm();
        
        }
        resetForm() {
        this.name = '';
        this.email = '';
        }
  }