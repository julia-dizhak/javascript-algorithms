import {
  getAllSubstr
} from './get-all-substr';

describe('getAll substrings test case', () => {
  it('edge cases', () => {
    expect(getAllSubstr('a')).toEqual('a');
  });

  it('n > 1', () => {
    expect(getAllSubstr('ab')).toEqual(['a', 'ab', 'b']);
    expect(getAllSubstr('some')).toEqual(['s', 'so', 'som', 'some', 'o', 'om', 'ome', 'm','me','e']);
  });
});
