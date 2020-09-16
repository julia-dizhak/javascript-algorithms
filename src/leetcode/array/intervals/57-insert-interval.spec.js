import {
  insert
} from './57-insert-interval';

describe('insert an interval test case', () => {
  it('newInterval is null', () => {
    expect(insert([[5,7]], [])).toEqual([[5,7]]);
    expect(insert([], [5,7])).toEqual([[5,7]]);
    expect(insert([[2,5],[6,7],[8,9]],[0,1])).toEqual([[0,1],[2,5],[6,7],[8,9]]);
  });

  it('merge do not need', () => {
    expect(insert([[1,2]],[3,4])).toEqual([[1,2], [3,4]]);
    expect(insert([[3,4]],[1,2])).toEqual([[1,2],[3,4]]);
    expect(insert([[1,5]],[2,3])).toEqual([[1,5]]);
  });

  it('merge needed', () => {
    expect(insert([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]]);
    expect(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])).toEqual([[1,2],[3,10],[12,16]]);
  });
});
