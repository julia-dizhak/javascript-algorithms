import {
  //fizzBuzz,
  fUseHash as fizzBuzz
} from './fizz-buzz';

describe('fizzbuzz test case', () => {

  it('add digits', () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  it('add digits', () => {
    expect(fizzBuzz(1)).toEqual(['1']);
    expect(fizzBuzz(2)).toEqual(['1', '2']);
    expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
    expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    expect(fizzBuzz(15)).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']);
  });
});
