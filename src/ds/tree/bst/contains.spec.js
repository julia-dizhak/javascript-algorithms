import {
  BST
} from './contains';

describe('contains test case', () => {
  let tree;
  beforeEach(() => {
    tree = new BST(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
  });

  it('contains a node', () => {
    //tree = JSON.parse(JSON.stringify(tree)).root;
    expect(tree.contains(4)).toBeTruthy();
    expect(tree.contains(6)).toBeTruthy();
  });

  it('does not contain a node', () => {
    expect(tree.contains(1)).toBeFalsy();
    expect(tree.contains(10)).toBeFalsy();
    tree.insert(1);
    expect(tree.contains(1)).toBeTruthy();
  });

});

