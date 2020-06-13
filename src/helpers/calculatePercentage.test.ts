import calculatePercentage from './calculatePercentage';

describe('Precentage calculation helper', () => {
  it('Returns calcualted percentage with no decimals when exact', () => {

    expect(calculatePercentage(500, 250)).toBe('50%');
  });

  it('Returns value rounded to one decimal number when not exact', () => {
    expect(calculatePercentage(501, 21)).toBe('4.2%');
  });
});
