import {
  reverseStringTwoPointers,
} from './reverse-a-string';

describe('reverse a string test case', () => {
  it('array length is 1', () => {
    expect(reverseStringTwoPointers(['h'])).toEqual(['h']);
  });

  // todo, the function doesn't return anything
  // how to test algorithms in-place
  xit('2 pointers', () => {
    expect(reverseStringTwoPointers(["h","e","l","l","o"])).toEqual(["0","l","l","e","h"]);
  });

});
