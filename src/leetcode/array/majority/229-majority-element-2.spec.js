import {
  majorityElement,
  //majorityElementUseHash as majorityElement,
  //majorityMooreVotingVariant2 as majorityElement
} from './229-majority-element-2';

describe('majority element 2', () => {
  it('empty array', () => {
    expect(majorityElement([])).toEqual([]);
  });

  it('one element array', () => {
    expect(majorityElement([1])).toEqual([1]);
  });

  it('majority elements exists', () => {
    expect(majorityElement([3,2,3])).toEqual([3]);
    expect(majorityElement([1,1,1,3,3,2,2,2])).toEqual([1,2]);
    expect(majorityElement([-1,100,2,100,100,4,100])).toEqual([100]);
  });
});
