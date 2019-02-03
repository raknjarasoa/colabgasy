import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ICountry, ApiService } from './api/api.service';
import { ISpecification, CompositeSpecification } from './specification';
export interface IFilter {
  name: string;
  region: string;
}

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
