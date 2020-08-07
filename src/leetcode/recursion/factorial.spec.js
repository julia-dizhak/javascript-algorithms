import { factorialUseLoop, factorial, factorialUseWhileLoop, factorialUseLoopOperatorMinus } from './factorial';

describe('factorial test case', () => {

  it('with for loop', ()=> {
    expect(factorialUseLoop(1)).toEqual(1);
    expect(factorialUseLoop(1)).not.toBe(0);

    expect(factorialUseLoop(5)).toEqual(120);
    expect(factorialUseLoop(3)).toBe(6);
  });

  it('with for loop operator minus', ()=> {
    expect(factorialUseLoopOperatorMinus(-10)).toEqual(-1);
    expect(factorialUseLoopOperatorMinus(0)).toEqual(1);
    expect(factorialUseLoopOperatorMinus(1)).toEqual(1);
    expect(factorialUseLoopOperatorMinus(1)).not.toBe(0);

    expect(factorialUseLoopOperatorMinus(5)).toEqual(120);
  });

  it('with recursion', ()=> {
    expect(factorial(-10)).toEqual(-1);
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(1)).not.toBe(0);

    expect(factorial(5)).toEqual(120);
    expect(factorial(3)).toBe(6);
  });

  it('with while loop', ()=> {
    expect(factorialUseWhileLoop(-10)).toEqual(-1);
    expect(factorialUseWhileLoop(0)).toEqual(1);
    expect(factorialUseWhileLoop(1)).toEqual(1);
    expect(factorialUseWhileLoop(1)).not.toBe(0);

    expect(factorialUseWhileLoop(5)).toEqual(120);
  });

});
