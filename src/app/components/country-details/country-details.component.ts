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
  themeService = inject(ThemeService);
  countryService = inject(CountryService);

  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });

    this.route.params.subscribe((params) => {
      if (params['name']) {
        this.getCountryDetails(params['name']);
      } else if (params['code']) {
        this.getCountryDetailsByCode(params['code']);
      }
    });
  }

  getCountryDetails(name: string) {
    this.isLoading = true;
    this.countryService.getCountryDetails(name).subscribe((country) => {
      this.isLoading = false;
      this.countryDetails = [country[0]];
    });
  }

  getCountryDetailsByCode(code: string) {
    this.isLoading = true;
    this.countryService.getCountryByCode(code).subscribe((country) => {
      this.isLoading = false;
      this.countryDetails = [country[0]];
    });
  }

  navigateToCountry(border: string) {
    this.router.navigate(['/code', border]);
  }

  objectKeys(obj: { [key: string]: {} }): string[] {
    return Object.keys(obj);
  }
}
