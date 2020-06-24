import { maxDepth, BT } from './104-maximum-depth-of-binary-tree';

describe('maximum depth of BT test case', () => {
  let tree;

  it('maximum depth 1', () => {
    tree = new BT(3);
    const arr = [9,20,null,null,15,7];
    arr.map((element, index) => {
      tree.addNode(element);
      return tree;
    })

    tree = JSON.parse(JSON.stringify(tree)).root;
    const height = maxDepth(tree);
    expect(height).toEqual(4);
  });

  it('maximum depth 2', () => {
    tree = new BT(50);
    const arr = [30,20,40,70,60,80];
    arr.map((element, index) => {
      tree.addNode(element);
      return tree;
    })

    tree = JSON.parse(JSON.stringify(tree)).root;
    const height = maxDepth(tree);
    expect(height).toEqual(3);
  });
});

