import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GuestComponent } from './components/guest/guest.component';
import { UsersComponent } from './components/users/users.component';
import { AuthComponent } from './auth/auth.component';


export const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'users', component: UsersComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }