import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { CountryCardComponent } from '../country-card/country-card.component';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [SearchBarComponent, FilterComponent, CountryCardComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent {}
