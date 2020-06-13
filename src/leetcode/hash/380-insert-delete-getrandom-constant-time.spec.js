import { RandomizedSet } from './380-insert-delete-getrandom-constant-time';

describe('randomized set, test case', () => {
  let randomSet;

  beforeEach(() => {
    randomSet = new RandomizedSet(10);
  });

  it('insert method', () => {
    randomSet.insert(4);
    expect(randomSet.arr).toEqual([4]);
    randomSet.insert(10);
    expect(randomSet.arr).toEqual([4, 10]);
  });

  // it('union', () => {
  //   quickFind.union(1,3);
  //   quickFind.union(0,3);
  //   expect(quickFind.id.length).toEqual(10);
  //   expect(quickFind.id).toEqual([3,3,2,3,4,5,6,7,8,9]);
  // });

});
