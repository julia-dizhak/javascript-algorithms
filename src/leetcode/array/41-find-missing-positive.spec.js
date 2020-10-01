import {
  //firstMissingPositiveUseHash as firstMissingPositive,
  //firstMissingPositiveUseArr as firstMissingPositive,
  firstMissingPositiveUseArr1 as firstMissingPositive,
} from './41-find-missing-positive';

describe('find missing positive', () => {
  it('first positive equal to 1', () => {
    expect(firstMissingPositive([-2,-1,-3])).toEqual(1);
  });

  it('positive equal or greater than 1', () => {
    expect(firstMissingPositive([1,2,0])).toEqual(3);
    expect(firstMissingPositive([3,4,-1,1])).toEqual(2);
    expect(firstMissingPositive([7,8,9,11,12])).toEqual(1);
    expect(firstMissingPositive([1,3])).toEqual(2);
  });
});
