import { Component, Inject, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    CountryListComponent,
    CountryDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Countrie App';
  isDarkTheme = false;

  themeService = inject(ThemeService);
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
      this.applyTheme();
    });
  }

  applyTheme() {
    if (this.isDarkTheme) {
      this.document.body.style.backgroundColor = '#202c36';
      this.document.body.style.color = '#fff';
    } else {
      this.document.body.style.backgroundColor = '#f2f2f2';
      this.document.body.style.color = '#000';
    }
  }
}
