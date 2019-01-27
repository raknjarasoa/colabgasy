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

describe('Spec', async () => {
  let trueSpec: TrueSpecification;
  let falseSpec: FalseSpecification;

  beforeEach(async () => {
    trueSpec = new TrueSpecification();
    falseSpec = new FalseSpecification();
  });

  test('true spec should be true', async () => {
    expect(trueSpec.isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('false spec should be false', async () => {
    expect(falseSpec.isSatisfiedBy(null)).toStrictEqual(false);
  });

  test('true AND false specs should be false', async () => {
    expect(trueSpec.and(falseSpec).isSatisfiedBy(null)).toStrictEqual(false);
  });

  test('true AND true specs should be true', async () => {
    expect(trueSpec.and(trueSpec).isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('false AND false specs should be false', async () => {
    expect(falseSpec.and(falseSpec).isSatisfiedBy(null)).toStrictEqual(false);
  });

  test('true OR false specs should be true', async () => {
    expect(trueSpec.or(falseSpec).isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('true OR true specs should be true', async () => {
    expect(trueSpec.or(trueSpec).isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('false OR false specs should be false', async () => {
    expect(falseSpec.or(falseSpec).isSatisfiedBy(null)).toStrictEqual(false);
  });

  // Not
  test('not false spec should be true', async () => {
    expect(falseSpec.not().isSatisfiedBy(null)).toStrictEqual(true);
  });

  test('not true spec should be false', async () => {
    expect(trueSpec.not().isSatisfiedBy(null)).toStrictEqual(false);
  });

  // orNot
  test('false orNot false specs should be true AND other false', async () => {
    expect(falseSpec.orNot(falseSpec).isSatisfiedBy(null)).toStrictEqual(true);
  });

  // andNot
  test('true andNot true specs should be false AND other true', async () => {
    expect(trueSpec.andNot(trueSpec).isSatisfiedBy(null)).toStrictEqual(false);
  });
});
