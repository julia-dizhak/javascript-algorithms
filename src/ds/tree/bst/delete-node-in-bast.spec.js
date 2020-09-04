import {
  BST
} from './delete-node-in-bst';

describe('delete a node test case', () => {
  let tree;

  beforeEach(() => {
    tree = new BST(6);
    tree.insert(2);
    tree.insert(3);
    tree.insert(0);
    tree.insert(1);
    tree.insert(10);
    tree.insert(11);
    tree.insert(12);
  });

  it('the node is not found', () => {
    tree.delete(4);
    tree = JSON.parse(JSON.stringify(tree)).root;
    expect(tree.val).toEqual(6);
    expect(tree.left.val).toEqual(2);
    expect(tree.right.val).toEqual(10);
  });

  it('node is a leaf, node is left child', () => {
    tree.delete(0);
    tree = JSON.parse(JSON.stringify(tree)).root;
    expect(tree.left.val).toEqual(2);
    expect(tree.right.val).toEqual(10);
    expect(tree.left.left.val).toEqual(1);
    expect(tree.left.left.left).toBeNull();
  });

  it('node is a leaf, node is right child', () => {
    tree.delete(3);
    tree = JSON.parse(JSON.stringify(tree)).root;
    expect(tree.left.val).toEqual(2);
    expect(tree.left.left.val).toEqual(0);
    expect(tree.left.right).toBeNull();
  });

  it('node has a one child, child is on the left', () => {
    tree.delete(1);
    tree = JSON.parse(JSON.stringify(tree)).root;

    expect(tree.left.val).toEqual(2);
    expect(tree.left.left.val).toEqual(0);
    expect(tree.left.right.val).toEqual(3);
    expect(tree.left.left.left).toBeNull();
  });

  it('node has a one child, child is on the right', () => {
    tree.delete(11);
    tree = JSON.parse(JSON.stringify(tree)).root;

    expect(tree.right.val).toEqual(10);
    expect(tree.right.right.val).toEqual(12);
    expect(tree.right.right.right).toBeNull();
  });

});

