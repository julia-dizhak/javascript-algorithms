import { mergeArrays } from './merge-2-arr';

describe('merge two sorted arrays test case', () => {
  it('for empty arrays', ()=> {
    expect(mergeArrays([], [])).toEqual([]);
  });

  it('for empty first array', () => {
    expect(mergeArrays([1, 3, 8], [])).toEqual([1, 3, 8]);
  });

  it('for empty second array', () => {
    expect(mergeArrays([], [2, 4])).toEqual([2, 4]);
  });

  it('for two arrays of the same size', () => {
    expect(mergeArrays([1, 3, 8], [2, 4, 6])).toEqual([1, 2, 3, 4, 6, 8]);
  });

  it('for two arrays with different size', () => {
    expect(mergeArrays([1, 2, 4], [3, 7, 8, 9])).toEqual([1, 2, 3, 4, 7, 8, 9]);
  });
});
