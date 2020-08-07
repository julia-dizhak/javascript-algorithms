import {
  preorderTraversal,
  //preorder as preorderTraversal,
  BT,
  TreeNode
} from './preorder';

describe('preorderTraversal test case', () => {
  let tree;

  it('preorderTraversal', () => {
    tree = new BT(1);
    tree.insert(2);
    tree.insert(3)
    tree = JSON.parse(JSON.stringify(tree)).root;
    //     1
    //   /   \
    //  2     3
    const result = preorderTraversal(tree);
    expect(result).toEqual([1,2,3]);
  });

  it('preorderTraversal', () => {
    tree = new BT(5);
    const arr = [4,3,2,1];
    arr.map((element, index) => {
      tree.insert(element);
      return tree;
    })

    tree = JSON.parse(JSON.stringify(tree)).root;
    //     5
    //   /   \
    //  4     3
    // / \   (next insertions here)
    // 2  1
    const result = preorderTraversal(tree);
    expect(result).toEqual([5,4,2,1,3]);
  });

  it('preorderTraversal, case with null as value', () => {
    tree = new TreeNode(1);
    tree.right = new TreeNode(2);
    tree.right.left = new TreeNode(3);
    // 1
    //  \
    //    2
    //  /
    // 3
    const result = preorderTraversal(tree);
    expect(result).toEqual([1,2,3]);
  });

});
