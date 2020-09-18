import {
  isRobotBoundedUseMath as isRobotBounded
}  from './1041-robot-bounded-in-circle';

describe('is robot bounded in circle test case', () => {
  it('there is no circle', () => {
    expect(isRobotBounded('GG')).toBeFalsy();
    expect(isRobotBounded('GLR')).toBeFalsy();
    expect(isRobotBounded('GLRRRRR')).toBeFalsy();
  });

  it('there is a circle', () => {
    expect(isRobotBounded('GL')).toBeTruthy();
    expect(isRobotBounded('GGLLGG')).toBeTruthy();
  });
});
