import { twoCitySchedCost  } from './1029-two-city-scheduling';

describe('Two city Scheduling test case', () => {
  it('general case', () => {
    expect(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])).toEqual(110);
    expect(twoCitySchedCost([[20,60],[10,50],[40,200],[30,300]])).toEqual(180);
  });

});
