import formatDate from './formatDate';

describe('Date format helper', () => {
  it('returns original string if invalid Date', () =>{
    const testString = '';

    expect(formatDate(testString)).toBe('');
  });
  
  it('returns formatted date if valid Date', () =>{
    const testString = '2020-06-12T02:52:37.924872+00:00';

    expect(formatDate(testString)).toBe('6/12/2020, 4:52:37 AM');
  });
});
