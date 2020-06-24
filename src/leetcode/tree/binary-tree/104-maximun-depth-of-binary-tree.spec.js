import { BinarySearchTree, invertTree } from './226-invert-binary-tree';

// toto
// Input [1,2]
// Output [1,null,2]

describe('binary search tree test case', () => {
  let tree;
  const arr = [4,2,7,1,3,6,9];

  beforeEach(() => {
    tree = new BinarySearchTree();
    arr.map((element, index) => {
      tree.add(element);
      return tree;
    })
  });

  it('invert a binary tree', () => {
    tree = JSON.parse(JSON.stringify(tree)).root;
    const invertedTree = invertTree(tree);
    const test = JSON.parse(JSON.stringify(invertedTree));

    expect(test.left.val).toEqual(7);
    expect(test.right.val).toEqual(2);
    expect(test.left.left.val).toEqual(9);
    expect(test.right.right.val).toEqual(1);
    // todo test as output [4,7,2,9,6,3,1]
  });

  xit('if there are only 2 nodes Input [1,2] and Output [1,null,2]', () => {

  });
});
