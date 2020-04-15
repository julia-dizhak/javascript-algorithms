import { jumpOnClouds } from './jump-on-clouds';

describe('jumpOnClouds test case', () => {
  it('empty array', () => {
    expect(jumpOnClouds([])).toEqual(0);
  });

  it('array with one element', () => {
    expect(jumpOnClouds([0])).toEqual(1);
  });

  it('arrays', () => {
    expect(jumpOnClouds([0,1,0,0,0,1,0])).toEqual(3);
    expect(jumpOnClouds([0,0, 0, 0, 1, 0])).toEqual(4);

  });
});

