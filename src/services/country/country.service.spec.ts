import {TestBed} from '@angular/core/testing';

import {CountryService} from './country.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: () => of({
              error: false,
              msg: '',
              data: [{country: 'test', cities: [], iso2: '', iso3: ''}]
            })
          }
        }
      ]
    });
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map response to list of country names', (done) => {
    service.getAll$().subscribe(list => {
      expect(list).toEqual(['test']);
      done();
    })
  });
});
