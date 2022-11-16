import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesListComponent} from "./countries-list/countries-list.component";
import {CountryWeatherComponent} from "./country-weather/country-weather.component";

const routes: Routes = [
  {path: '', component: CountriesListComponent},
  {path: 'weather/:name', component: CountryWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
