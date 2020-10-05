import {
  removeCoveredIntervals,
  //removeCoveredIntervalsUseSort as removeCoveredIntervals,
  //removeCoveredIntervalsUseSort2 as removeCoveredIntervals
} from './1288-remove-covered-intervals';

describe('remove covered intervals test', () => {
  it('no overlap', () => {
    expect(removeCoveredIntervals([[0,10],[5,12]])).toEqual(2);
    expect(removeCoveredIntervals([[1,5],[6,12]])).toEqual(2);
  });

  it('removed covered intervals', () => {
    expect(removeCoveredIntervals([[1,4],[3,6],[2,8]])).toEqual(2);
    expect(removeCoveredIntervals([[1,4],[3,9],[2,8],[3,10]])).toEqual(3);
    expect(removeCoveredIntervals([[1,4],[2,3]])).toEqual(1);
    expect(removeCoveredIntervals([[3,10],[4,10],[5,11]])).toEqual(2);
    expect(removeCoveredIntervals([[1,2],[1,4],[3,4]])).toEqual(1);
    expect(removeCoveredIntervals([[1,2],[2,3],[1,4]])).toEqual(1);
  });
});
