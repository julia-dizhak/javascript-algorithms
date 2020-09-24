import {
  //canCompleteCircuit,
  //canCompleteCircuit1 as canCompleteCircuit,
  //canCompleteCircuit2Passes as canCompleteCircuit,
  canCompleteCircuitBruteForce as canCompleteCircuit
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
    expect(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1])).toEqual(4);
    expect(canCompleteCircuit([5,8,2,8],[6,5,6,6])).toEqual(3);
    expect(canCompleteCircuit([1,2],[2,1])).toEqual(1);
  });

  it('travel is not possible', () => {
    expect(canCompleteCircuit([2,3,4],[3,4,3])).toEqual(-1);
    expect(canCompleteCircuit([1,2],[2,2])).toEqual(-1);
  });
});
