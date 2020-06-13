import {
  sortColors,
} from './75-sort-colors';

describe('sort colors test case ', () => {
  it('empty array', () => {
    let x = [];
    sortColors(x);
    expect(x).toEqual([]);
  });

  it('only one element array', () => {
    let x = [1];
    sortColors(x);
    expect(x).toEqual(x);
  });

  it('array', () => {
    let x = [2,0,1];
    sortColors(x);
    expect(x).toEqual([0,1,2]);
  });

  it('approach 2 pointers', () => {
    let x = [2,0,0,2,1,1,0,2];
    sortColors(x);
    expect(x).toEqual([0,0,0,1,1,2,2,2]);
  });
});
