import {
  //preorderTraversal,
  preorder as preorderTraversal,
  BT
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

  // todo
  xit('preorderTraversal, case with null as value', () => {
    tree = new BT(1);
    const arr = [null,2,3];
    arr.map((element, index) => {
      tree.insert(element);
      return tree;
    })

    tree = JSON.parse(JSON.stringify(tree)).root;
    // 1
    //  \
    //    2
    //  /
    // 3
    const result = preorderTraversal(tree);
    // expect(result).toEqual([1,2,3]);
  });


});
