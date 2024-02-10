import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  showFilter = false;
  rotation = 0;

  toggleFilter() {
    this.showFilter = !this.showFilter;
    this.rotation = this.showFilter ? 180 : 0;
  }
}
