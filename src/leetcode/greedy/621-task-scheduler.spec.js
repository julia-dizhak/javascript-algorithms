import {
  leastInterval,
  //leastIntervalUseHash as leastInterval
} from './621-task-scheduler';

describe('task scheduler test case', () => {

  it('edge cases', () => {
    expect(leastInterval(["A","B","C","D","E","F","G"], 2)).toEqual(7);
  });

  it('need idle', () => {
    expect(leastInterval(["A","A","A","B","B","B"], 2)).toEqual(8);
    expect(leastInterval(["A","B","C","C","C"], 2)).toEqual(7);
    expect(leastInterval(["A","B","B","C"], 3)).toEqual(5);
  });

  it('do not need idle', () => {
    expect(leastInterval(["A","B","B","C"], 2)).toEqual(4);
    expect(leastInterval(["A","B","B","C","C"], 2)).toEqual(5);
  });

});
