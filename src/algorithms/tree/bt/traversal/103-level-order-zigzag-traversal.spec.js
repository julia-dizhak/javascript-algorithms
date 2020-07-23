import {
  zigzagLevelOrder,
  TreeNode,
  //zigzagLevelOrderUseRecursion as zigzagLevelOrder
} from './103-level-order-zigzag-traversal';

describe('level order zigzag traversal test case', () => {
  let tree;

  it('tree with one node', () => {
    tree = new TreeNode(3);
    const result = zigzagLevelOrder(tree);
    expect(result).toEqual([ [3] ]);
  });

  it('tree with 3 nodes', () => {
    tree = new TreeNode(3);
    tree.left = new TreeNode(15);
    tree.right = new TreeNode(7);
    const result = zigzagLevelOrder(tree);
    expect(result).toEqual([[ 3 ], [ 7, 15 ]]);
  });

  it('tree', () => {
    tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);
    const result = zigzagLevelOrder(tree);
    expect(result).toEqual([[ 3 ], [ 20, 9 ], [ 15, 7 ]]);
  });
});
