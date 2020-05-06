import {
  bitwiseComplement, findComplement, bitwiseComplementUseReduce, flipBitByBit,
  decimalToBinary
} from './number-complement';

describe('bitwise complement test case', () => {
  it('flip bit by bit', () => {
    expect(flipBitByBit (5)).toEqual(2);
    expect(flipBitByBit (1)).toEqual(0);
  });

  it('use toString and parseInt', () => {
    expect(bitwiseComplement(5)).toEqual(2);
    expect(bitwiseComplement(1)).toEqual(0);

    expect(findComplement(5)).toEqual(2);
    expect(findComplement(1)).toEqual(0);
  });

  it('use reduce', () => {
    expect(bitwiseComplementUseReduce(5)).toEqual(2);
    expect(bitwiseComplementUseReduce(1)).toEqual(0);
  });

  it('decimalToBinary', () => {
    expect(decimalToBinary(5)).toEqual('101');
    expect(decimalToBinary(1)).toEqual('1');
    //expect(decimalToBinary(0)).toEqual('0');
  });

});
