import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICountry {
  name?: string;
  capital?: string;
  region?: string;
  population?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`https://restcountries.eu/rest/v2/all`);
  }
}
