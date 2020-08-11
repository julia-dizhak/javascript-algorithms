import {
  //rottingOranges,
  rottingOrangesBFS as rottingOranges
} from './994-rotting-oranges';

describe('rotting oranges test case', () => {
  let grid1, grid2, grid3, grid4, grid5;

  beforeEach(() => {
    grid1 = [
      [2,1,1],
      [1,1,0],
      [0,1,1]
    ];
    grid2 = [
      [2,1,1],
      [0,1,0],
      [1,0,1]
    ];
    grid3 = [[0,2]];
    grid4 = [
      [0,0]
    ];
    grid5 = [
      [1,1]
    ];
  });

  it('edge cases', () => {
    expect(rottingOranges(grid4)).toEqual(-1);
    expect(rottingOranges(grid5)).toEqual(-1);
  });

  it('rotting all oranges is possible', () => {
    expect(rottingOranges(grid1)).toEqual(4);
  });

  it('rotting all oranges is not possible', () => {
    expect(rottingOranges(grid2)).toEqual(-1);
    expect(rottingOranges(grid3)).toEqual(-1);
  });
});
