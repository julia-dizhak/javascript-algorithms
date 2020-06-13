import { QuickFind } from './quick-find';

describe('quick find, test case', () => {
  let quickFind;

  beforeEach(() => {
    quickFind = new QuickFind(10);
  });

  it('connected', () => {
    let connectedBefore = quickFind.connected(1,2);
    expect(connectedBefore).toBeFalsy();
    quickFind.union(1,2);
    expect(quickFind.connected(1,2)).toBeTruthy();
  });

  it('union', () => {
    quickFind.union(1,3);
    quickFind.union(0,3);
    expect(quickFind.id.length).toEqual(10);
    expect(quickFind.id).toEqual([3,3,2,3,4,5,6,7,8,9]);
  });

});
