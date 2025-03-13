import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

const routes: Routes = [
    {
        path: 'parent', // Path for the parent route
        component: ParentComponent, // Component for the parent route
        children: [ // Define child routes under the 'children' array
            {
                path: 'child-one', // Path for the first child route (relative to 'parent')
                component: ChildOneComponent // Component for the first child route
            },
            {
                path: 'child-two', // Path for the second child route (relative to 'parent')
                component: ChildTwoComponent // Component for the second child route
            },
            {
                path: '', // Default child route (when only '/parent' is accessed)
                redirectTo: 'child-one', // Redirect to 'child-one' by default
                pathMatch: 'full' // Match the full path to redirect correctly
            }
        ]
    },
    {
        path: '',
        redirectTo: '/parent', // Redirect to '/parent' as the default route
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
