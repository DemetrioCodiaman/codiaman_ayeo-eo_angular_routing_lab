import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { AdminGuard } from './admin.guard'; 

export const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'child-one',
        component: ChildOneComponent
      },
      {
        path: 'child-two',
        component: ChildTwoComponent
      },
        {
            path: 'admin',
            component: ParentComponent, // Let's reuse ParentComponent for admin section for simplicity
            canActivate: [AdminGuard], // Apply AdminGuard to this route
            children: [
              {
                path: 'dashboard',
                component: ChildOneComponent // Example admin child component
              },
              {
                path: 'users',
                component: ChildTwoComponent // Example admin child component
              }
            ]
          },
          
      {
        path: '',
        redirectTo: 'child-one',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/parent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
