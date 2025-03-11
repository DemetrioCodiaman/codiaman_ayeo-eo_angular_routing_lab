
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './about/profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent , children: [
        { path: 'profile', component: ProfileComponent }]},
    { path: 'contact', component: ContactComponent }];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],  // Make sure RouterModule is correctly imported
        exports: [RouterModule]  // Ensure RouterModule is exported
      })
    
    export class AppRoutingModule { }
