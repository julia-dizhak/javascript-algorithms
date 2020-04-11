import { power } from './power';

describe('power test case', () => {

  it('case with base equals 0 and 1', () => {
    expect(power(2,0)).toEqual(1);
    expect(power(2,1)).toEqual(2);
  })

  it('power', () => {
    expect(power(2,10)).toEqual(1024);
    expect(power(2,2)).toEqual(4);
    expect(power(3,3)).toEqual(27);
  })
});

