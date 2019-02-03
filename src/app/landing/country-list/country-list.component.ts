import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ISpecification } from 'src/app/shared/helpers/specification';
import {
  CountryService,
  ICountry
} from 'src/app/shared/services/country.service';
import { NameRule, PopulationRule, RangeRule, RegionRule } from './rules';

export interface IFilter {
  name: string;
  region: string;
}

@Component({
  selector: 'cg-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  filter: IFilter;

  data: ICountry[];

  filtered: ICountry[];

  loading = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loading = true;
    this.filter = {} as IFilter;
    this.countryService
      .getData()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {
        this.data = res;
        this.filtered = this.data;
      });
  }

  applyFilter(f: IFilter): void {
    const byNameSpec = new NameRule(f.name);
    const byRegionSpec = new RegionRule(f.region);
    const bytotalPoulationSpec = new PopulationRule();
    const byRangeDateSpec = new RangeRule(1, 2);

    const filterCriteria = bytotalPoulationSpec
      .not()
      .or(byRegionSpec)
      .and(byNameSpec);

    this.filtered = this.process(filterCriteria);
  }

  process(spec: ISpecification<ICountry>): ICountry[] {
    return this.data.filter((c) => spec.isSatisfiedBy(c));
  }
}
