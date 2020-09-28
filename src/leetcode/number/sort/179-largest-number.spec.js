import {
  //largestNumber,
  //largestNumber3 as largestNumber,
  largestNumber4 as largestNumber
} from './179-largest-number';

describe('largest number', () => {
  it('empty array', () => {
    expect(largestNumber([])).toEqual('');
  });

  it('nums are 0', () => {
    expect(largestNumber([0,0])).toEqual('0');
  });

  it('array is not empty', () => {
    expect(largestNumber([10,2])).toEqual('210');
    expect(largestNumber([102, 201])).toEqual('201102');
    expect(largestNumber([12, 10, 2, 3, 4])).toEqual('4321210');
    expect(largestNumber([3,30,34,5,9])).toEqual('9534330');
  });
});
