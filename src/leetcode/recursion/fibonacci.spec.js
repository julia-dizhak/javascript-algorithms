import {
  fib,
  fibIterative
} from './fibonacci';

describe('fibpnacci test case', () => {

  it('use recursion', ()=> {
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
  });

  it('use iterative solution', ()=> {
    expect(fibIterative(0)).toEqual(0);
    expect(fibIterative(1)).toEqual(1);
    expect(fibIterative(2)).toEqual(1);
    expect(fibIterative(3)).toEqual(2);
    expect(fibIterative(4)).toEqual(3);
  });

});
