import { BinarySearchTree as BST } from './api';

describe('binary search tree test case', () => {
  let tree;

  it('insert node to binary search tree', () => {
    tree = new BST(4);
    const arr = [10,15,8];
    arr.map((element, index) => {
      tree.insert(element);
      return tree;
    })

    expect(tree.size()).toEqual(4);
  });

  it('contains node in binary search tree', () => {
    tree = new BST(4);
    const arr = [10,15,8];
    arr.map((element, index) => {
      tree.insert(element);
      return tree;
    })

    expect(tree.contains(3)).toBe(false);
    tree.insert(3);
    expect(tree.contains(3)).toBe(true);
  });

  // it('height of binary search tree without leaf', () => {
  //   tree.insert(4);
  //   tree.insert(2);
  //   tree.insert(6);
  //   tree.insert(1);
  //   tree.insert(3);
  //   tree.insert(5);
  //   tree.insert(7);
  //   expect(tree.height()).toEqual(2);
  // });

  // it('height of binary search tree with leaf', () => {
  //   tree.insert(1);
  //   tree.insert(3);
  //   tree.insert(2);
  //   tree.insert(5);
  //   tree.insert(4);
  //   tree.insert(6);
  //   tree.insert(7);
  //   expect(tree.height()).toEqual(4);
  // });
});

