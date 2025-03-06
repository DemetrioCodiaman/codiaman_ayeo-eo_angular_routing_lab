import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';
import { AdminModule } from './admin/admin.module'; // Import AdminModule if needed

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add the routing module here
    AdminModule // Import AdminModule if needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }