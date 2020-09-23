import {
  majorityElement,
  // majorityElementBruteForce as majorityElement,
  //majorityMooreVoting as majorityElement,
  //majorityElementSorting as majorityElement,
  //majorityElementRandomization as majorityElement doesn't pass,
  //majorityElementDivideConquer as majorityElement
} from './169-majority-element';

describe('majority element ', () => {
  it('empty array', () => {
    expect(majorityElement([])).toEqual(-1);
  });

  it('one element array', () => {
    expect(majorityElement([1])).toEqual(1);
  });

  it('majority element exist', () => {
    expect(majorityElement([3,2,3])).toEqual(3);
    expect(majorityElement([1,2,1,3,1])).toEqual(1);
    expect(majorityElement([8,8,7,7,7])).toEqual(7);
  });

  it('majority does not exist', () => {
    expect(majorityElement([2, 2, 2, 4, 7, 9, 6, 5, 66])).toEqual(-1);
    expect(majorityElement([1,2,3])).toEqual(-1);
  });
});
