import { clearBit } from './common-bit-tasks';

describe('common bit tasks test case', () => {
  it('clearBit', () => {
    expect(clearBit(2,0)).toEqual(2);
    expect(clearBit(2,1)).toEqual(0);
    expect(clearBit(2,2)).toEqual(2);
    expect(clearBit(2,3)).toEqual(2);
    expect(clearBit(2,4)).toEqual(2);
  });
});
