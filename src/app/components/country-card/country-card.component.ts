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

  countryService = inject(CountryService);
  themeService = inject(ThemeService);

  ngOnInit() {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      // console.log(countries);

      this.themeService.isDarkTheme.subscribe((darkTheme) => {
        this.isDarkTheme = darkTheme;
      });
    });
  }
}
