import {
  rottingOranges
} from './rotting-oranges';

describe('rotting oranges test case', () => {
  let grid1, grid2, grid3;
  //let output1, output2;


  beforeEach(() => {
    grid1 = [
      [2,1,1],
      [1,1,0],
      [0,1,1]
    ];
    grid1 = [
      [2,1,1],
      [0,1,0],
      [1,0,1]
    ];
    grid3 = [
      [0,2],
    ];
  });

  // it('rotting all oranges is possible', () => {
  //   expect(rottingOranges(grid1)).toEqual(4);
  // });

  it('rotting all oranges is not possible', () => {
    expect(rottingOranges(grid2)).toEqual(-1);
    //expect(rottingOranges(grid3)).toEqual(-1);
  });
});
