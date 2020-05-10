import { findJudge } from './997-find-judge';

describe('find the judge', () => {
  it('there is a judge', () => {
    expect(findJudge(3, [[1,3],[2,3]])).toEqual(3);
    expect(findJudge(2, [[1,2]])).toEqual(2);
  });

  it('there is no judge', () => {
    expect(findJudge(3, [[1,3],[2,3],[3,1]] )).toEqual(-1);
    expect(findJudge(2, [[1,2], [2,3]] )).toEqual(-1);
  });
});
