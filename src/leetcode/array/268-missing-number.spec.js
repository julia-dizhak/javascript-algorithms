import {
  missingNumber,
  missingNumberGauss
} from './268-missing-number';

describe('missingNumber test case', () => {

  it('sorting', () => {
    expect(missingNumber([3,0,1])).toEqual(2);
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toEqual(8);
    expect(missingNumber([2,0,4,1])).toEqual(3);
  });

  it('gauss formula', () => {
    expect(missingNumberGauss([3,0,1])).toEqual(2);
    expect(missingNumberGauss([9,6,4,2,3,5,7,0,1])).toEqual(8);
    expect(missingNumberGauss([2,0,4,1])).toEqual(3);
  });

});
