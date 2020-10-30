import {
  maxDistToClosest
} from './849-max-dist-to-closest';

describe('maxDistToClosest test case', () => {

  it('corner cases, 2 seats only', () => {
    expect(maxDistToClosest([0,1])).toEqual(1);
  });

  it('more than 2 seats', () => {
    expect(maxDistToClosest([1,0,0,0,1,0,1])).toEqual(2);
    expect(maxDistToClosest([1,0,0,0])).toEqual(3);
    expect(maxDistToClosest([1,0,0,0,0,0,0,0])).toEqual(7);
    expect(maxDistToClosest([1,0,0,0,0])).toEqual(4);
  });
});
