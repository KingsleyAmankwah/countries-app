import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.toggleTheme();
  }
}
