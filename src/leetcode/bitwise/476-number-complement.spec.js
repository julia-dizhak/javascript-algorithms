import {
  //bitwiseComplement,
  //findComplement as bitwiseComplement,
  // bitwiseComplementUseReduce as bitwiseComplement,
  flipBitByBit as bitwiseComplement, 
  //decimalToBinary as bitwiseComplement
} from './476-number-complement';

describe('bitwise complement test case', () => {
  it('edge cases', () => {
    expect(bitwiseComplement(0)).toEqual(1);
    expect(bitwiseComplement(1)).toEqual(0);
    expect(bitwiseComplement(2)).toEqual(1);
  });

  it('complement for 3,5,8,10', () => {
    expect(bitwiseComplement(8)).toEqual(7);
    expect(bitwiseComplement(3)).toEqual(0);
    expect(bitwiseComplement(5)).toEqual(2);
    expect(bitwiseComplement(10)).toEqual(5);
  });
});
