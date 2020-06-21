import { getPermutation } from './60-permutation-sequence';

describe('getPermutation', () => {
  it('n, k exists', () => {
    expect(getPermutation(3, 3)).toEqual('213');
    expect(getPermutation(4, 9)).toEqual('2314')
  });
});
