import { firstUniqueChar } from './firstUniqueChar';

describe('firstUniqueChar', () => {

  it('find unique string', ()=> {
    expect(firstUniqueChar('leetcode')).toEqual(0);
    expect(firstUniqueChar('loveleetcode')).toEqual(2);

  });

  it('there is no unique string', ()=> {
    expect(firstUniqueChar('loleeoe')).toEqual(-1);
  });

});
