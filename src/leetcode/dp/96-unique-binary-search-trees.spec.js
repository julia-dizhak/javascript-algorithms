import {
  numTrees
} from './96-unique-binary-search-trees';

describe('number of trees, test case ', () => {
  it('bottom cases', () => {
    expect(numTrees(0)).toEqual(1);
    expect(numTrees(1)).toEqual(1);
  });

  it('n >= 2', () => {
    expect(numTrees(2)).toEqual(2);
    expect(numTrees(3)).toEqual(5);
    expect(numTrees(4)).toEqual(14);
    expect(numTrees(5)).toEqual(42);
  });
});
