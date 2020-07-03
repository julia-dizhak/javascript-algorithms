import {
  levelOrderForLeetcode as levelOrder,
  BT,
  levelOrderBottom
} from './level-order-traversal';

describe('levelOrderTraversal and level bottom traversal test case', () => {
  let tree;

  it('levelOrder', () => {
    tree = new BT(1);
    tree.insertNode(2);
    tree.insertNode(3)
    tree = JSON.parse(JSON.stringify(tree)).root;
    //     1
    //   /   \
    //  2     3
    const result = levelOrder(tree);
    const resultBottom = levelOrderBottom(tree);
    expect(result).toEqual([[1],[2,3]]);
    expect(resultBottom).toEqual([[2,3], [1]])
  });

  it('levelOrder complex Tree', () => {
    tree = new BT(5);
    const arr = [4,3,2,1];
    arr.map((element, index) => {
      tree.insertNode(element);
      return tree;
    })

    tree = JSON.parse(JSON.stringify(tree)).root;
    //     5
    //   /   \
    //  4     3
    // / \   (next insertions here)
    // 2  1
    const result = levelOrder(tree);
    const resultBottom = levelOrderBottom(tree);
    expect(result).toEqual([[5],[4,3],[2,1]]);
    expect(resultBottom).toEqual([[2,1],[4,3],[5]]);
  });
});
