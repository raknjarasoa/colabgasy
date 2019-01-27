import { CompositeSpecification } from './';

class TrueSpecification extends CompositeSpecification<any> {
  isSatisfiedBy(candidate: any) {
    return true;
  }
}

class FalseSpecification extends CompositeSpecification<any> {
  isSatisfiedBy(candidate: any) {
    return false;
  }
}

describe('Spec', () => {
  let trueSpec: TrueSpecification;
  let falseSpec: FalseSpecification;

  beforeEach(() => {
    trueSpec = new TrueSpecification();
    falseSpec = new FalseSpecification();
  });

  test('true spec should be true', () => {
    expect(trueSpec.isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('false spec should be false', () => {
    expect(falseSpec.isSatisfiedBy(null)).toStrictEqual(false);
  });

  test('true AND false specs should be false', () => {
    expect(trueSpec.and(falseSpec).isSatisfiedBy(null)).toStrictEqual(false);
  });

  test('true AND true specs should be true', () => {
    expect(trueSpec.and(trueSpec).isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('false AND false specs should be false', () => {
    expect(falseSpec.and(falseSpec).isSatisfiedBy(null)).toStrictEqual(false);
  });

  test('true OR false specs should be true', () => {
    expect(trueSpec.or(falseSpec).isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('true OR true specs should be true', () => {
    expect(trueSpec.or(trueSpec).isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('false OR false specs should be false', () => {
    expect(falseSpec.or(falseSpec).isSatisfiedBy(null)).toStrictEqual(false);
  });

  // Not
  test('not false spec should be true', () => {
    expect(falseSpec.not().isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('not true spec should be false', () => {
    expect(trueSpec.not().isSatisfiedBy(null)).toStrictEqual(false);
  });
});
