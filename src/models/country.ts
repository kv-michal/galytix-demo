export interface CountryData {
  iso2: string;
  iso3: string;
  country: string;
  cities: string[];
}

export interface CountriesResponse {
  error: boolean;
  msg: string;
  data: CountryData[];
}

export interface Country {
  name: string,
  code: string
}
