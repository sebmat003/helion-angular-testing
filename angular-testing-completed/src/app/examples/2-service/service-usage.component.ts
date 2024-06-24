import { Component, inject } from '@angular/core';
import { CountryService } from './service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-service-usage',
  standalone: true,
  imports: [AsyncPipe],
  providers: [CountryService],
  template: `
    <h3>1. English countries</h3>
    <div>
      @for (country of englishCountries$ | async; let last = $last; track
      $index) {
      <span>{{ country.name.official }}</span> @if(!last) {<span>, </span>} }
    </div>
    <h3>2. Poland</h3>
    @if (poland$ | async; as poland) {
    <p>Capital: {{ poland.capital }}</p>
    <p>Population: {{ poland.population }}</p>
    <p>Currency: {{ poland.currencies['PLN'].name }}</p>
    <p>
      Flag:
      <img class="flag" [src]="poland.flags.png" [alt]="poland.flags.alt" />
    </p>
    }
    <h3>3. All countries:</h3>
    <div class="countries">
      @for (country of allCountries$ | async; track $index) {
      <div class="country">
        <p class="name">{{ country.name.official }}</p>
        @if (country.flags; as flags) {
        <img class="flag" [src]="flags.png" [alt]="flags.alt" />
        }
      </div>
      }
    </div>
  `,
  styles: `
  .countries {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .country {
    margin: 10px;

    .name {
      width: 100px;
    }
  }

  .flag {
      height: 100px;
      border: 1px solid black;
    }
  `,
})
export class ServiceUsageComponent {
  readonly countryService = inject(CountryService);
  englishCountries$ = this.countryService.getCountriesByLanguage('english');
  poland$ = this.countryService.getCountry('poland');
  allCountries$ = this.countryService.getAllCountries();
}
