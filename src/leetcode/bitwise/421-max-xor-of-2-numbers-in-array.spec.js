import {
  //findMaximumXOR1 as findMaximumXOR,
  findMaximumXOR
} from './421-max-xor-of-2-numbers-in-array';

describe('maximum xor of 2 numbers in array', () => {
  it('arr length is <= 2', () => {
    expect(findMaximumXOR([0])).toEqual(0);
    expect(findMaximumXOR([2,4])).toEqual(6);
  });

  it('array length is greater than 2', () => {
    expect(findMaximumXOR([3,10,5,25,2,8])).toEqual(28);
    expect(findMaximumXOR([8,10,2])).toEqual(10);
    expect(findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70])).toEqual(127);
  });
});
