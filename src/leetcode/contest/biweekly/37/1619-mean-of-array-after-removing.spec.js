import {
  //trimMean4 as trimMean,
  trimMean,
  //trimMean2 as trimMean
} from './1619-mean-of-array-after-removing';

describe('mean of array after removing test case', () => {
  it('arr is not empty', () => {
    expect(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3])).toEqual(2.00000);
    expect(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0])).toEqual(4.00000);
    expect(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4])).toEqual(4.77778);
  });

});
