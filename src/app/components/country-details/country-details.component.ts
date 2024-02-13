import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
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

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });

    this.route.params.subscribe((params) => {
      const countryName = params['name'];
      this.countryService
        .getCountryDetails(countryName)
        .subscribe((country) => {
          this.isLoading = false;
          this.countryDetails = [country[0]];
          console.log(this.countryDetails);
        });
    });
  }

  // loadBorderCountry(border: string) {
  //   // Fetch the details of the border country and update the `country` variable
  //   // This is just a placeholder, replace it with your actual code to fetch the country details
  //   this.countryService.getCountryDetails(border).subscribe((country) => {
  //     this.countryDetails = country;
  //   });
  // }

  objectKeys(obj: { [key: string]: {} }): string[] {
    return Object.keys(obj);
  }
}
