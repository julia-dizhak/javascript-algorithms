import {
  //hIndex,
  hIndexSort as hIndex,
} from './274-h-index';

describe('find h-index test case', () => {
  it('corner cases', () => {
    expect(hIndex([])).toEqual(0);
    //expect(hIndex(undefined)).toEqual(0);
    expect(hIndex([0,0])).toEqual(0);
  });

  it('calculate h-index', () => {
    expect(hIndex([3,0,6,1,5])).toEqual(3);
    expect(hIndex([0,3,2,5,6])).toEqual(3);
    expect(hIndex([0,1])).toEqual(1);
    expect(hIndex([1,1,1,1,1])).toEqual(1);
    expect(hIndex([2,1,2,2,2,2])).toEqual(2);
    expect(hIndex([0,1,1,1,1,1,2,2,2,2])).toEqual(2);
  });

});
