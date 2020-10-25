import { 
  //isUnique,
  isUniqueBruteForce as isUnique
} from './is-unique';

describe('isUnique', () => {

  it('string is unique', ()=> {
    expect(isUnique('abcdef')).toBeTruthy();
    expect(isUnique('89%df#$^a&x')).toBeTruthy();
    expect(isUnique('abcAdef')).toBeTruthy();
  });

  it('string is not unique', ()=> {
    expect(isUnique('abcaef')).toBeFalsy();
  });
});
