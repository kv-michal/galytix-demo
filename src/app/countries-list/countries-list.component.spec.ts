import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountriesListComponent} from './countries-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";

describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: () => of({
              error: false,
              msg: '',
              data: [
                {country: 'test1', cities: [], iso2: '', iso3: ''},
                {country: 'test2', cities: [], iso2: '', iso3: ''}
              ]
            })
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of 2 countries', () => {
    const items = fixture.debugElement.queryAll(By.css('mat-grid-tile'));
    expect(items.length).toEqual(2);
  });
});
