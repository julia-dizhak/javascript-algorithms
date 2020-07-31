import {
  climbStairsBruteForce as climbStairs
}  from './70-climbing-stairs';

describe('climbing stairs test case ', () => {
  it('edge cases', () => {
    expect(climbStairs(0)).toEqual(1);
    expect(climbStairs(1)).toEqual(1);
  });

  it('n > 2', () => {
    expect(climbStairs(2)).toEqual(2);
    expect(climbStairs(3)).toEqual(3);
    expect(climbStairs(4)).toEqual(5);
    expect(climbStairs(5)).toEqual(8);
  });
});
