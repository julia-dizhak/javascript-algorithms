import {
  //reverseBits,
  reverseBitsToString as reverseBits
} from './190-reverse-bits';

describe('reverse bits test case', () => {
  it('reverse', () => {
    expect(reverseBits('11111111111111111111111111111101')).toEqual(3221225471);
  });
});
