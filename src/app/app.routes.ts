import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BoosterListComponent } from './pages/booster-list/booster-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'booster', component: BoosterListComponent },

];

