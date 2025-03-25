import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './about/profile/profile.component';
import { AdminGuard } from './admin/admin.guard';
import { ProfileAdminComponent } from './about/profile-admin/profile-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'admin-profile', component: ProfileAdminComponent},
    {path: 'admin',component: AboutComponent, canActivate:[AdminGuard],children:[
        {path:'profile-user', component: ProfileComponent},
        {path:'profile-admin', component: ProfileAdminComponent}
    ]},
    {path:',', redirectTo:'/about',pathMatch:'full'}
];
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }