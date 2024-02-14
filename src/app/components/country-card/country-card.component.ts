import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interface/country';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css',
})
export class CountryCardComponent {
  countries!: Country[];
  isDarkTheme = false;
  isLoading = true;
  searchTerm!: string;
  selectedRegion = '';

  countryService = inject(CountryService);
  themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });

    this.countryService.currentSearchTerm.subscribe((term) => {
      this.searchTerm = term;
    });

    this.isLoading = true;
    this.countryService.getCountries().subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });

    this.countryService.currentRegion.subscribe((region) => {
      this.selectedRegion = region;
    });
  }

  selectRegion(region: string) {
    this.selectedRegion = region;
  }

  get filteredContryList() {
    let filteredCountries = this.countries;

    if (this.searchTerm) {
      const lowerCaseTerm = this.searchTerm.toLowerCase();
      filteredCountries = filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(lowerCaseTerm)
      );
    }

    if (this.selectedRegion) {
      filteredCountries = filteredCountries.filter(
        (country) => country.region === this.selectedRegion
      );
    }

    return filteredCountries;
  }
}
