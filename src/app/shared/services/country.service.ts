import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedModule } from '../shared.module';

export interface ICountry {
  name?: string;
  capital?: string;
  region?: string;
  population?: number;
}

@Injectable({
  providedIn: SharedModule
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`https://restcountries.eu/rest/v2/all`);
  }
}
