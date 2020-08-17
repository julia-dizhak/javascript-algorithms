import {
  distributeCandiesUseLoop as distributeCandies
} from './1103-distribute-candies-to-people';

describe('longest palindrome test case', () => {
  it('edge case', () => {
    expect(distributeCandies(0,0)).toEqual([]);
  });

  it('solution exist', () => {
    expect(distributeCandies(7,4)).toEqual([1,2,3,1]);
    expect(distributeCandies(9,4)).toEqual([1,2,3,3]);
    expect(distributeCandies(10,3)).toEqual([5,2,3]);
    expect(distributeCandies(8,4)).toEqual([1,2,3,2]);
    expect(distributeCandies(28,3)).toEqual([12,7,9]);
  });
});
