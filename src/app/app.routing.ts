import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { TestPageComponent } from './test-page';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'test-page', component: TestPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);