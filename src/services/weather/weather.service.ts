import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherResponse} from "../../app/country-weather/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getWeatherByCountry$(name: string, units: string): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=${units}&APPID=794ee95e63c5a32aaf88cd813fa2e425`)
  }
}
