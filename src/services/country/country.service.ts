import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CountriesResponse, Country} from "../../models/country";
import {map} from 'rxjs/operators';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll$(): Observable<string[]> {
    return this.httpClient.get<CountriesResponse>('https://countriesnow.space/api/v0.1/countries')
      .pipe(map(response => response.data.map(countryData => countryData.country)));
  }
}
