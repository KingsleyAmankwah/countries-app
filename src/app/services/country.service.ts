import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Country } from '../interface/country';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  BASE_URL = environment.API_URL;

  http = inject(HttpClient);

  private searchTerm = new BehaviorSubject<string>('');
  currentSearchTerm = this.searchTerm.asObservable();

  private regionSubject = new BehaviorSubject<string>('');
  currentRegion = this.regionSubject.asObservable();

  updateSearchTerm(term: string) {
    this.searchTerm.next(term);
  }

  updateRegion(region: string) {
    this.regionSubject.next(region);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.BASE_URL + 'all');
  }

  getCountryDetails(name: string): Observable<Country[]> {
    const url = `${this.BASE_URL}name/${name}`;
    return this.http.get<Country[]>(url);
  }
}
