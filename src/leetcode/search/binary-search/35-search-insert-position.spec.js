import {
  searchInsert
} from './35-search-insert-position';

describe('search insert position test case', () => {
  it('target is present', () => {
    expect(searchInsert([1,3,5,6], 5)).toEqual(2);
  });

  it('target does not exist', () => {
    expect(searchInsert([1,3,5,6], 2)).toEqual(1);
    expect(searchInsert([1,3,5,6], 7)).toEqual(4);
    expect(searchInsert([1,3,5,6], 0)).toEqual(0);
  });

  it('duplicates are present in array', () => {
    expect(searchInsert([1,3,3,5,6], 2)).toEqual(1);
    expect(searchInsert([1,1,3,5,6], 2)).toEqual(2);
  });

});
