import {
  twoCitySchedCost,
  twoCitySchedCostSortAbs
} from './1029-two-city-scheduling';

describe('Two city Scheduling test case', () => {
  it('sorted', () => {
    expect(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])).toEqual(110);
    expect(twoCitySchedCost([[20,60],[10,50],[40,200],[30,300]])).toEqual(180);
  });

  it('sort use abs', () => {
    expect(twoCitySchedCostSortAbs([[10,20],[30,200],[400,50],[30,20]])).toEqual(110);
    expect(twoCitySchedCostSortAbs([[20,60],[10,50],[40,200],[30,300]])).toEqual(180);
  });

});
