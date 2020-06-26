import { countNodes, BST } from './222-count-complete-tree-nodes';

describe('count complete tree nodes test case', () => {
  let tree;

  it('depth is 2, count is 3, perfect BT', () => {
    tree = new BST(2);
    const arr = [1,3];
    arr.map((element, index) => {
      tree.insertNode(element);
      return tree;
    })

    tree = JSON.parse(JSON.stringify(tree)).root;
    const count = countNodes(tree);
    expect(count).toEqual(3);
  });

  it('depth is 3', () => {
    tree = new BST(1);
    const arr = [2,3,4,5,6,7];
    arr.map((element, index) => {
      tree.insertNode(element);
      return tree;
    });

    tree = JSON.parse(JSON.stringify(tree)).root;
    const count = countNodes(tree);
    expect(count).toEqual(7);
  });
});
