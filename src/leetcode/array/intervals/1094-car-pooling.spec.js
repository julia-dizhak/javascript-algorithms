import {
  carPooling,
  //carPoolingCountStops as carPooling
} from './1094-car-pooling';

describe('car pooling interval problem test case', () => {
  it('capacity is enough', () => {
    expect(carPooling([[3,2,7], [3,7,9], [8,3,9]], 11)).toBeTruthy();
    expect(carPooling([[2,1,5], [3,3,7]], 5)).toBeTruthy();
    expect(carPooling([[2,1,5], [3,5,7]], 3)).toBeTruthy();
  });

  it('capacity is not enough', () => {
    expect(carPooling([[2,1,5], [3,3,7]], 4)).toBeFalsy();
  });
});
