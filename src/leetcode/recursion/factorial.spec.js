import {
  //factorialUseLoop as factorial,
  factorial,
  // factorialUseWhileLoop,
  // factorialUseLoopOperatorMinus
} from './factorial';

describe('factorial test case', () => {

  it('all cases', ()=> {
    expect(factorial(-10)).toEqual(-1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(1)).not.toBe(0);
    expect(factorial(5)).toEqual(120);
    expect(factorial(3)).toBe(6);
  });

});
