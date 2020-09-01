import {
  TreeNode,
  BST
} from './insert-node-in-bst';

describe('insert a node in BST test case', () => {
  let tree;
  beforeEach(() => {
    tree = new BST(2);
  });

  it('insert node to binary search tree', () => {
    tree.insertNode(1);
    tree.insertNode(3);

    tree = JSON.parse(JSON.stringify(tree)).root;
    expect(tree.val).toEqual(2);
    expect(tree.left.val).toEqual(1);
    expect(tree.right.val).toEqual(3);
  });

  it('duplicates', () => {
    tree.insertNode(1);
    tree.insertNode(3);
    tree.insertNode(1);

    tree = JSON.parse(JSON.stringify(tree)).root;
    expect(tree.left.val).toEqual(1);
    // expect(tree.left.left.val).toEqual(null);
    // expect(tree.left.left.left.val).toEqual(null);
    expect(tree.right.val).toEqual(3);
  });

});

