import {
  majorityElementUseHash
} from './229-majority-element-2';

describe('majority element 2', () => {
  it('empty array', () => {
    expect(majorityElementUseHash([])).toEqual(-1);
  });

  it('one element array', () => {
    expect(majorityElementUseHash([1])).toEqual(1);
  });

  it('use hash', () => {
    expect(majorityElementUseHash([3,2,3])).toEqual([3]);
    expect(majorityElementUseHash([1,1,1,3,3,2,2,2])).toEqual([1,2]);
  });
});
