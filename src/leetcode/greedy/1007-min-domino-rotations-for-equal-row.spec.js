import {
  minDominoRotations,
  //minDominoRotationsBruteForce as minDominoRotations,
  //minDominoRotationsBruteForce1 as minDominoRotations
} from './1007-min-domino-rotations-for-equal-row';

describe('minDominoRotations test case', () => {
  it('it can be done', () => {
    expect(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2])).toEqual(2);
  });
  
  it('not possible', () => {
    expect(minDominoRotations([3,5,1,2,3], [3,6,3,3,4])).toEqual(-1);
  });

});
