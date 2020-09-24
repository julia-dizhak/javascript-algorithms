import {
  canCompleteCircuit,
  //canCompleteCircuit1 as canCompleteCircuit
} from './134-gas-station';

describe('gas station test case', () => {
  it('empty gas array or equal to 1', () => {
    expect(canCompleteCircuit([],[1,2])).toEqual(-1);
    expect(canCompleteCircuit([3],[1, 2])).toEqual(0);
    expect(canCompleteCircuit([1],[1, 2])).toEqual(0);
    expect(canCompleteCircuit([1],[2, 1])).toEqual(-1);
  });

  it('travel is possible', () => {
    expect(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])).toEqual(3);
    expect(canCompleteCircuit([1,2],[2,1])).toEqual(1);
  });

  it('travel is not possible', () => {
    expect(canCompleteCircuit([2,3,4],[3,4,3])).toEqual(-1);
    expect(canCompleteCircuit([1,2],[2,2])).toEqual(-1);
  });
});
