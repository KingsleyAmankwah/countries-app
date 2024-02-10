import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interface/country';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css',
})
export class CountryCardComponent {
  countries!: Country[];
  countryService = inject(CountryService);

  ngOnInit() {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      // console.log(countries);
    });
  }
}
