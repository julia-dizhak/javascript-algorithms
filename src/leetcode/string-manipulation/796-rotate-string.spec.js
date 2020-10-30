import {
  //stringRotation, 
  //stringRotationUseHash as stringRotation,
  stringRotationSimpleCheck as stringRotation
} from './796-rotate-string';

describe('string rotation test case', () => {

  it('size of strings is different', () => {
    expect(stringRotation('test','test1')).toBeFalsy();
  });

  it('strings are equal', () => {
    expect(stringRotation('test','test')).toBeTruthy();
  });

  it('strings are rotated', () => {
    expect(stringRotation('rotation', 'tationro')).toBeTruthy();
    expect(stringRotation('rotation', 'tionrota')).toBeTruthy();
    expect(stringRotation('javascript', 'scriptjava')).toBeTruthy();
  });

  it('there is no a rotation', () => {
    expect(stringRotation('test', 'tset')).toBeFalsy();
    expect(stringRotation('abcde','abdce')).toBeFalsy();
  });
});
