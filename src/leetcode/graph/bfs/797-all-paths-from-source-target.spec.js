import {
  allPathsSourceTarget,
  //allPathsSourceTargetVariant1 as allPathsSourceTarget
} from './797-all-paths-from-source-target';

describe('all paths from source target test case', () => {

  it('return all paths', () => {
    expect(allPathsSourceTarget([[1,2], [3], [1,3], []])).toEqual([[0,1,3], [0,2,3], [0,2,1,3] ]);
    expect(allPathsSourceTarget([[1,2], [3], [3], []])).toEqual([[0,1,3], [0,2,3]]);
  });
});
