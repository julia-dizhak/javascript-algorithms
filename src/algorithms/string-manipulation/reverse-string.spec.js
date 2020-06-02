import {
  reverseStringRecursion,
  reverseStringTwoPointers,
} from './reverse-a-string';

describe('reverse a string test case', () => {
  it('array length is 1', () => {
    expect(reverseStringTwoPointers(['h'])).toEqual(['h']);
  });

  it('use recursion', () => {
    let x = ['a','b', 'c'];
    reverseStringRecursion(x);
    expect(x).toEqual(["c","b","a"]);
  });

  it('2 pointers approach', () => {
    let x = ['a', 'b', 'c'];
    reverseStringTwoPointers(x);
    expect(x).toEqual(["c","b","a"]);
  });
});
