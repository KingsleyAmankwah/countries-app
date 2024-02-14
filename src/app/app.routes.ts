import { Routes } from '@angular/router';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountryListComponent } from './components/country-list/country-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full',
  },
  {
    path: 'countries',
    component: CountryListComponent,
  },
  {
    path: 'details/:name',
    component: CountryDetailsComponent,
  },
  {
    path: 'code/:code',
    component: CountryDetailsComponent,
  },
];
