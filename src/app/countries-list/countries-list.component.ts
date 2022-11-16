import {Component} from '@angular/core';
import {CountryService} from "../../services/country/country.service";

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent {
  countries$ = this.countryService.getAll$();

  trackByIndex(index: number) {
    return index;
  }

  constructor(
    private countryService: CountryService
  ) {
  }

}
