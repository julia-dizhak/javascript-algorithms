import {
  //buildTreeUseRecursion as buildTree,
  //buildTreeUseRecursion1 as buildTree,
  // buildTreeUseHash as buildTree,
  buildTree
} from './106-construct-bt-from-postorder-inorder-traversal';

describe('built a tree from postorder and inorder, test case', () => {

  it('postorder and inorder are empty', () => {
    expect(buildTree([],[])).toEqual(null);
  });

  it('postorder and inorder are not empty, simple tree', () => {
    let tree = {"left": {"left": null, "right": null, "val": 2}, "right": {"left": null, "right": null, "val": 3}, "val": 1};
    //     1
    //   /   \
    //  2     3
    expect(buildTree([2,1,3], [2,3,1])).toEqual(tree);
  });

  it('postorder and inorder are not empty', () => {
    let tree = {"left": {"left": null, "right": null, "val": 9}, "right": {"left": {"left": null, "right": null, "val": 15}, "right": {"left": null, "right": null, "val": 7}, "val": 20}, "val": 3};
    expect(buildTree([9,3,15,20,7], [9,15,7,20,3])).toEqual(tree);
  });

});
