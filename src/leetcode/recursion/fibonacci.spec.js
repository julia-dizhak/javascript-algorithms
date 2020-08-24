import {
  fib,
  //fibIterative,
  fibIterativeTop as fibIterative,
  fib2
} from './fibonacci';

describe('fibonacci test case', () => {

  it('fib if N === 0, return 0', ()=> {
    // 0 1 1 2 3 5 8 13
    // 0 1 2 3 4 5 6 7
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
    expect(fib(5)).toEqual(5);
    expect(fib(6)).toEqual(8);
    expect(fib(7)).toEqual(13);
  });

  it('iterative', () => {
    //   fib 0 1 1 2 3 5 8 13
    // index 0 1 2 3 4 5 6 7
    expect(fibIterative(0)).toEqual(0);
    expect(fibIterative(1)).toEqual(1);
    expect(fibIterative(2)).toEqual(1);
    expect(fibIterative(3)).toEqual(2);
    expect(fibIterative(4)).toEqual(3);
    expect(fibIterative(5)).toEqual(5);
    expect(fibIterative(6)).toEqual(8);

  });

});
