import { BinarySearchTree } from './binary-search-tree';

describe('binary search tree test case', () => {
  let tree;
  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  it('insert node to binary search tree', () => {
    tree.insert(5);
    tree.insert(10);
    tree.insert(15);
    tree.insert(8);
    expect(tree.size()).toEqual(4);
  });

  it('contains node in binary search tree', () => {
    expect(tree.contains(3)).toBe(false);
    tree.insert(3);
    expect(tree.contains(3)).toBe(true);
  });

  // it('two sum with hash', () => {
  //   expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  //   expect(twoSum([2, 7, 11, 15], 13)).toEqual([0, 2]);
  //   expect(twoSum([3 ,2, 4], 6)).toEqual([1, 2]);
  // });

  // it('array with equal values target', () => {
  //   expect(twoSum([2, 7, 13, 5, 4, 13, 5], 10)).toEqual([3, 6]);
  // });

  // it('there is no target', () => {
  //   expect(twoSum([2, 7, 11, 15], 8)).toEqual([]);
  // });

  // it('two sum using Map', () => {
  //   expect(twoSumUsingMap([2, 7, 11, 15], 9)).toEqual([0, 1]);
  //   expect(twoSum([2, 7, 13, 5, 4, 13, 5], 10)).toEqual([3, 6]);
  // });
});

