import { swap, swapUseTemp  } from './swap';

describe('swap test case', () => {
  it('swap', () => {
    expect(swap(3,4)).toEqual([4,3]);
  });

  it('swap use variable temp', () => {
    expect(swapUseTemp(1,2)).toEqual([2,1]);
  });

});
