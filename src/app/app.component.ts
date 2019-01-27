import { Component, OnInit } from '@angular/core';
import { ICountry, ApiService } from './api/api.service';
import { ISpecification, CompositeSpecification } from './specification';

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'colabgasy';

  data: ICountry[];

  filtered: ICountry[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((res) => {
      this.data = res;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    const byNameSpec = new NameSpecification('ma');
    const byRegionSpec = new RegionSpecification('Europe');
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
