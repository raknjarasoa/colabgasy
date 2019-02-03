import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService, ICountry } from 'src/app/api/api.service';
import { CompositeSpecification, ISpecification } from 'src/app/specification';

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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.filter = {} as IFilter;
    this.apiService
      .getData()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {
        this.data = res;
        this.filtered = this.data;
      });
  }

  applyFilter(f: IFilter): void {
    const byNameSpec = new NameSpecification(f.name);
    const byRegionSpec = new RegionSpecification(f.region);
    const bytotalPoulationSpec = new PopulationSuperieurSpecification();
    const byRangeDateSpec = new RangeSpecification(1, 2);

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

class NameSpecification extends CompositeSpecification<ICountry> {
  constructor(private name: string) {
    super();
  }

  isSatisfiedBy(candidate: ICountry): boolean {
    if (!this.name) {
      return true;
    }
    const regExp = new RegExp(this.name, 'gi');
    return Boolean(candidate.name.match(regExp));
  }
}

class RegionSpecification extends CompositeSpecification<ICountry> {
  constructor(private region: string) {
    super();
  }

  isSatisfiedBy(candidate: ICountry): boolean {
    return candidate.region === this.region;
  }
}

class PopulationSuperieurSpecification extends CompositeSpecification<
  ICountry
> {
  readonly MAX_POPULATION = 10000;

  isSatisfiedBy(candidate: ICountry): boolean {
    return candidate.population < this.MAX_POPULATION;
  }
}

export class RangeSpecification<T> extends CompositeSpecification<T> {
  constructor(private min: T, private max: T) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return candidate >= this.min && candidate <= this.max;
  }
}
