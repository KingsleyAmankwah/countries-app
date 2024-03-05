import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css',
})
export class CountryDetailsComponent {
  isDarkTheme = false;
  isLoading = true;
  countryDetails!: Country[];
  borderCountries: { [key: string]: string } = {};

  themeService = inject(ThemeService);
  countryService = inject(CountryService);

  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });

    this.route.params.subscribe((params) => {
      this.getCountryDetails(params['name']);
    });
  }

  getCountryDetails(name: string) {
    this.isLoading = true;
    this.countryService.getCountryDetails(name).subscribe((country) => {
      this.isLoading = false;
      this.countryDetails = [country[0]];
      this.fetchBorderCountriesNames(this.countryDetails[0].borders);
    });
  }

  fetchBorderCountriesNames(borders: string[]) {
    if (borders) {
      borders.forEach((border) => {
        this.countryService.getCountryByCode(border).subscribe((country) => {
          this.borderCountries[border] = country[0].name.common;
        });
      });
    }
  }

  navigateToCountry(border: string) {
    this.countryService.getCountryByCode(border).subscribe((country) => {
      this.isLoading = false;
      this.router.navigate(['/details', country[0].name.common]);
    });
  }

  objectKeys(obj: { [key: string]: {} }): string[] {
    return Object.keys(obj);
  }
}
