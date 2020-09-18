import {
  //nthUglyNumber,
  //nthUglyNumberGenerateAllNumbers as nthUglyNumber,
  nthUglyNumberDP as nthUglyNumber
} from './264-ugly-number-2';

describe('ugly number II test case ', () => {
  it('sequence', () => {
    expect(nthUglyNumber(10)).toEqual(12);
    expect(nthUglyNumber(7)).toEqual(8);
    expect(nthUglyNumber(8)).toEqual(9);
    expect(nthUglyNumber(15)).toEqual(24);
    expect(nthUglyNumber(150)).toEqual(5832);
    expect(nthUglyNumber(1)).toEqual(1);
  });
});
