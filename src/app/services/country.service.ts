import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Country } from '../interface/country';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  BASE_URL = environment.API_URL;
  allCountries!: Country[];

  constructor(private http: HttpClient) {}

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

  getAllCountries(): Observable<Country[]> {
    if (!this.allCountries) {
      const url = `${this.BASE_URL}all`;
      return this.http
        .get<Country[]>(url)
        .pipe(tap((countries) => (this.allCountries = countries)));
    } else {
      return of(this.allCountries);
    }
  }

  getCountryDetails(name: string): Observable<Country[]> {
    return of(
      this.allCountries.filter((country) => country.name.common === name)
    );
  }

  getCountryBorderFullNames(borders: string[]): Observable<string[]> {
    return of(borders);
  }
}
