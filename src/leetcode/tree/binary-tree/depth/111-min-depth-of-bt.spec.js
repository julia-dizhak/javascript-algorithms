import {
  minDepth,
  TreeNode
} from './111-min-depth-of-bt';

describe('min depth of BT test case', () => {
  let root;

  it('root is null', () => {
    root = null;

    const depth = minDepth(root);
    expect(depth).toEqual(0);
  });

  it('left is less than right height are not equal', () => {
    root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    
    const depth = minDepth(root);
    expect(depth).toEqual(2);
  });

  it('left subtree is min', () => {
    root = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.right = new TreeNode(4);
    root.right.right.right = new TreeNode(5);
    root.right.right.right.right = new TreeNode(6);
    
    const depth = minDepth(root);
    expect(depth).toEqual(5);
  });

  it('left and right subtree are equal', () => {
    root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(2);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    
    const depth = minDepth(root);
    expect(depth).toEqual(3);
  });
});
