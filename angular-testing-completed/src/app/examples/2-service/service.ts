import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country } from './models/country.models';

@Injectable()
export class CountryService {
  readonly apiUrl = 'https://restcountries.com/v3.1';
  http = inject(HttpClient);

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.apiUrl}/all?fields=name,capital,flags`
    );
  }

  getCountriesByLanguage(language: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.apiUrl}/lang/${language}?fields=name`
    );
  }

  getCountry(country: string): Observable<Country> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${country}`)
      .pipe(map((countries) => countries[0]));
  }
}
