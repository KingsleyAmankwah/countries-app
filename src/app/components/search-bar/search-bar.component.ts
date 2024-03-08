import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  isDarkTheme = false;

  constructor(
    private themeService: ThemeService,
    private countryService: CountryService
  ) {}

  handleInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value.trim();
    if (inputValue !== '') {
      this.countryService.updateSearchTerm(inputValue);
    }
  }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });
  }
}
