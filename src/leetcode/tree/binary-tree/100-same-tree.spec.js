import {
  //isSameTree,
  //isSameTreeIteration as isSameTree,
  isSameTreeDFS as isSameTree,
  TreeNode
} from './100-same-tree';

describe('define is BT are the same test case', () => {
  let p;
  let q;

  it('p and q are the same', () => {
    p = new TreeNode(1);
    q = new TreeNode(1);

    p.left = new TreeNode(2)
    p.right = new TreeNode(3)

    q.left = new TreeNode(2);
    q.right = new TreeNode(3);
    expect(isSameTree(p, q)).toBeTruthy();
  });

  it('nested p and q are the same', () => {
    p = new TreeNode(1);
    q = new TreeNode(1);

    p.left = new TreeNode(2)
    p.left.left = new TreeNode(4);
    p.left.right = new TreeNode(5);
    p.right = new TreeNode(3)

    q.left = new TreeNode(2);
    q.left.left = new TreeNode(4);
    q.left.right = new TreeNode(5);
    q.right = new TreeNode(3);
    expect(isSameTree(p, q)).toBeTruthy();
  });

  it('p and q are not the same', () => {
    p = new TreeNode(1);
    q = new TreeNode(1);

    p.left = new TreeNode(3)
    p.right = new TreeNode(2)

    q.left = new TreeNode(2);
    q.right = new TreeNode(3);
    expect(isSameTree(p, q)).toBeFalsy();
  });

  it('nested p and q are not the same', () => {
    p = new TreeNode(1);
    q = new TreeNode(1);

    p.left = new TreeNode(3);
    p.left.left = new TreeNode(1);
    p.left.right = new TreeNode(4);
    p.right = new TreeNode(2);

    q.left = new TreeNode(2);
    q.right = new TreeNode(3);
    expect(isSameTree(p, q)).toBeFalsy();
  });
});
