import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './about/profile/profile.component';
import { ProfileAdminComponent } from './about/profile-admin/profile-admin.component';
import { DataBindingDemoComponent } from './binding/binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, RouterLinkActive,AboutComponent,ContactComponent,HomeComponent,ProfileComponent,ProfileAdminComponent,DataBindingDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing-lab';
}