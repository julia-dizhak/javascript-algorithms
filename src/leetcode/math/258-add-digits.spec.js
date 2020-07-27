import {
  //addDigits,
  addDigitsMath as addDigits,
  //addDigitsUseLoop as addDigits
} from './258-add-digits';

describe('add digits test case', () => {

  it('add digits', () => {
    expect(addDigits(9)).toEqual(9);
    expect(addDigits(38)).toEqual(2);
    expect(addDigits(112)).toEqual(4);
    expect(addDigits(912)).toEqual(3);
  });
});
