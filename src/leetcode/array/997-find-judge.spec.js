import { findJudge, findJudgeTwoArrays } from './997-find-judge';

describe('find the judge approach one array', () => {
  it('if N = 0', () => {
    expect(findJudge(0, [])).toEqual(-1);
  });

  it('there is a judge', () => {
    expect(findJudge(3, [[1,3],[2,3]])).toEqual(3);
    expect(findJudge(2, [[1,2]])).toEqual(2);
    expect(findJudge(5, [[1,3],[2,3],[4,3],[4,1],[5,3],[5,1],[5,4]])).toEqual(3);
  });

  it('there is no judge', () => {
    expect(findJudge(3, [[1,3],[2,3],[3,1]] )).toEqual(-1);
    expect(findJudge(3, [[1,2], [2,3]] )).toEqual(-1);
    expect(findJudge(5, [[2,1],[3,1],[4,2],[4,3],[4,5],[5,1]])).toEqual(-1);
  });
});

describe('find the judge approach 2 arrays', () => {
  it('if N = 0', () => {
    expect(findJudgeTwoArrays(0, [])).toEqual(-1);
  });

  it('there is a judge', () => {
    expect(findJudgeTwoArrays(3, [[1,3],[2,3]])).toEqual(3);
    expect(findJudgeTwoArrays(2, [[1,2]])).toEqual(2);
    expect(findJudgeTwoArrays(5, [[1,3],[2,3],[4,3],[4,1],[5,3],[5,1],[5,4]])).toEqual(3);
  });

  it('there is no judge', () => {
    expect(findJudgeTwoArrays(3, [[1,3],[2,3],[3,1]] )).toEqual(-1);
    expect(findJudgeTwoArrays(3, [[1,2], [2,3]] )).toEqual(-1);
    expect(findJudgeTwoArrays(5, [[2,1],[3,1],[4,2],[4,3],[4,5],[5,1]])).toEqual(-1);
  });
});
