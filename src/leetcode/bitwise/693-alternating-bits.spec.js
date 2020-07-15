import {
  // hasAlternatingBits,
  // hasAlternatingBitsUseToString as hasAlternatingBits,
  // hasAlternatingBitsDivideByTwo as hasAlternatingBits,
  hasAlternatingBitsXOR as hasAlternatingBits
} from './693-alternating-bits';

describe('alternating-bits test case', () => {
  it('has alternating bits', () => {
    expect(hasAlternatingBits(5)).toBeTruthy();
    expect(hasAlternatingBits(10)).toBeTruthy();
  });

  it('do not have alternating bits', () => {
    expect(hasAlternatingBits(7)).toBeFalsy();
    expect(hasAlternatingBits(11)).toBeFalsy();
  });
});
