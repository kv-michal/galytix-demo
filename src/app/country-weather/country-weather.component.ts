import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather/weather.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from 'rxjs/operators';
import {combineLatest} from "rxjs";
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import {UnitLabel} from "../../models/weather";

@Component({
  selector: 'app-country-weather',
  templateUrl: './country-weather.component.html',
  styleUrls: ['./country-weather.component.scss']
})
export class CountryWeatherComponent implements OnInit {
  units?: keyof UnitLabel = 'metric';
  unitLabel: UnitLabel = {
    metric: {
      temperature: '°C',
      speed: 'm/s'
    },
    imperial: {
      temperature: '°F',
      speed: 'mph'
    }
  }
  weather$ = combineLatest([
    this.activatedRoute.paramMap,
    this.activatedRoute.queryParamMap
  ]).pipe(
    switchMap(([paramsMap, queryParamMap]) => {
      this.units = queryParamMap.get('units') || 'metric';
      return this.weatherService.getWeatherByCountry$(paramsMap.get('name') as string, this.units)
    })
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  setUnits(change: MatButtonToggleChange): void {
    this.router.navigate([], {queryParams: {units: change.value}})
  }

  getUnitLabel(type: 'temperature' | 'speed'): string {
    return this.unitLabel[this.units as keyof UnitLabel][type as 'temperature'];
  }

}
