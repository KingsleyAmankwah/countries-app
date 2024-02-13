import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  showFilter = false;
  isDarkTheme = false;
  rotation = 0;
  selectedRegion = '';

  themeService = inject(ThemeService);
  countryService = inject(CountryService);

  toggleFilter() {
    this.showFilter = !this.showFilter;
    this.rotation = this.showFilter ? 180 : 0;
  }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });
  }

  changeRegion(region: string) {
    this.selectedRegion = region;
    this.countryService.updateRegion(region);
  }
}
