import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

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

  themeService = inject(ThemeService);

  toggleFilter() {
    this.showFilter = !this.showFilter;
    this.rotation = this.showFilter ? 180 : 0;
  }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });
  }
}
