import {
  //titleToNumber,
  // titleToNumberMath as titleToNumber,
  // titleToNumberMath1 as titleToNumber,
  titleToNumberUseRecursion as titleToNumber
} from './171-excel-sheet-column-number';

describe('title to number test case', () => {
  it('if length of s is 1', () => {
    expect(titleToNumber('A')).toEqual(1);
    expect(titleToNumber('B')).toEqual(2);
  });

  it('if s length more than 1', () => {
    expect(titleToNumber('AA')).toEqual(27);
    expect(titleToNumber('AB')).toEqual(28);
    expect(titleToNumber('BA')).toEqual(53);
    expect(titleToNumber('ZY')).toEqual(701);
    expect(titleToNumber('AAA')).toEqual(703);
    expect(titleToNumber('ABC')).toEqual(731);
  });

});
