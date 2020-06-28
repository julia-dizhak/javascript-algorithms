import { BT } from './bt';

describe('BT test case', () => {
  let tree;

  it('insert', () => {
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
    expect(tree.val).toEqual(5);
    expect(tree.left.val).toEqual(4);
    expect(tree.right.val).toEqual(3);
    expect(tree.right.right).toEqual(null);
    expect(tree.left.left.val).toEqual(2);
    expect(tree.left.right.val).toEqual(1);
  });

  it('insert a node, case with null as value', () => {
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
    expect(tree.val).toEqual(1);
    expect(tree.right.val).toEqual(2);
    // expect(tree.right.left.val).toEqual(3);
  });


});
