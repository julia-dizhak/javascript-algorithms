import {
  findDuplicate,
} from './287-find-duplicate-number';

describe('find a duplicate number test case', () => {
  it('array is undefined or empty', () => {
    expect(findDuplicate([])).toEqual(-1);
  });

  it('one duplicate exists', () => {
    expect(findDuplicate([1,3,4,2,2])).toEqual(2);
    expect(findDuplicate([3,1,3,4,2])).toEqual(3);
    //expect(findDuplicate([1,1,4,2,3])).toEqual(1);
  });
});
