export interface ISpecification<T> {
  isSatisfiedBy(candidate: T): boolean;
}

export interface ICompositeSpecification<T> extends ISpecification<T> {
  and(other: ICompositeSpecification<T>): ICompositeSpecification<T>;
  or(other: ICompositeSpecification<T>): ICompositeSpecification<T>;
  not(): ICompositeSpecification<T>;
  andNot(other: ICompositeSpecification<T>): ICompositeSpecification<T>;
  orNot(other: ICompositeSpecification<T>): ICompositeSpecification<T>;
}

export abstract class CompositeSpecification<T>
  implements ICompositeSpecification<T> {
  abstract isSatisfiedBy(candidate: T): boolean;

  and(other: ICompositeSpecification<T>): ICompositeSpecification<T> {
    return new AndSpecification<T>(this, other);
  }

  or(other: ICompositeSpecification<T>): ICompositeSpecification<T> {
    return new OrSpecification<T>(this, other);
  }

  not(): ICompositeSpecification<T> {
    return new NotSpecification<T>(this);
  }

  andNot(other: ICompositeSpecification<T>): ICompositeSpecification<T> {
    return new AndNotSpecification<T>(this, other);
  }

  orNot(other: ICompositeSpecification<T>): ICompositeSpecification<T> {
    return new OrNotSpecification<T>(this, other);
  }
}

export class NotSpecification<T> extends CompositeSpecification<T> {
  constructor(private other: ICompositeSpecification<T>) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return !this.other.isSatisfiedBy(candidate);
  }
}

export class AndSpecification<T> extends CompositeSpecification<T> {
  constructor(
    private left: ICompositeSpecification<T>,
    private right: ICompositeSpecification<T>
  ) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return (
      this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate)
    );
  }
}

export class AndNotSpecification<T> extends AndSpecification<T> {
  isSatisfiedBy(candidate: T): boolean {
    return super.isSatisfiedBy(candidate) !== true;
  }
}

export class OrSpecification<T> extends CompositeSpecification<T> {
  constructor(
    private left: ICompositeSpecification<T>,
    private right: ICompositeSpecification<T>
  ) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return (
      this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate)
    );
  }
}

export class OrNotSpecification<T> extends OrSpecification<T> {
  isSatisfiedBy(candidate: T): boolean {
    return super.isSatisfiedBy(candidate) !== true;
  }
}
