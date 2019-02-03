import { CompositeSpecification } from 'src/app/shared/helpers/specification';
import { ICountry } from 'src/app/shared/services/country.service';

export class NameRule extends CompositeSpecification<ICountry> {
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

export class RegionRule extends CompositeSpecification<ICountry> {
  constructor(private region: string) {
    super();
  }

  isSatisfiedBy(candidate: ICountry): boolean {
    return candidate.region === this.region;
  }
}

export class PopulationRule extends CompositeSpecification<ICountry> {
  readonly MAX_POPULATION = 10000;

  isSatisfiedBy(candidate: ICountry): boolean {
    return candidate.population < this.MAX_POPULATION;
  }
}

export class RangeRule<T> extends CompositeSpecification<T> {
  constructor(private min: T, private max: T) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return candidate >= this.min && candidate <= this.max;
  }
}
