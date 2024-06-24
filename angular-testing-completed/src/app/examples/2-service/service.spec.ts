import { HttpMethod, SpectatorHttp } from '@ngneat/spectator';
import { CountryService } from './service';
import { createHttpFactory } from '@ngneat/spectator/jest';

describe('CountryService', () => {
  let spectator: SpectatorHttp<CountryService>;
  let service: CountryService;
  const apiUrl = 'https://restcountries.com/v3.1';
  const createHttp = createHttpFactory(CountryService);

  beforeEach(() => {
    spectator = createHttp();
    service = spectator.service;
  });

  it('should have correct apiUrl', () => {
    expect(service.apiUrl).toBe(apiUrl);
  });

  it('should send a GET request to get all countries', () => {
    service.getAllCountries().subscribe();

    const req = spectator.expectOne(
      `${apiUrl}/all?fields=name,capital,flags`,
      HttpMethod.GET
    );
    expect(req.request.body).toEqual(null);
  });

  it.each(['polish', 'german', 'english'])(
    'should send a GET request to get countries based on the provided language - %s',
    (language) => {
      service.getCountriesByLanguage(language).subscribe();

      spectator.expectOne(
        `${apiUrl}/lang/${language}?fields=name`,
        HttpMethod.GET
      );
    }
  );

  it.each(['poland', 'spain', 'croatia'])(
    'should send a GET request to get country information - %s',
    (country) => {
      service.getCountry(country).subscribe();

      spectator.expectOne(`${apiUrl}/name/${country}`, HttpMethod.GET);
    }
  );
});
