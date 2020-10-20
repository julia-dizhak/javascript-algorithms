/*
Biweekly 37 17.10

How many problem resolved?
Vasyl helped with 1 problem
4204 / 8250

toFixed(5); // todo move
*/


/*
1 problem

1619. Mean of Array After Removing Some Elements
easy
Array
see corresponding file
*/

function test(params) {
  return true;
}

/*
1620 Coordinate With Maximum Network Quality
medium

Euclidean distance.
integral coordinates
*/

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
  //const coord = towers[0].slice(0,2);
  const coord = towers[1].slice(0,2);
  const [x,y] = coord;
  console.log('x', x);
  console.log('y', x);

  let maxSum = 0;

  for (let i = 0; i < towers.length; i++) {
    let sum = 0;
    const coord = towers[i].slice(0,2);
    console.log('coord', coord);
    const [x,y] = coord;

    for (let i = 0; i < towers.length; i++) {
      const coordO = towers[i].slice(0,2);
      console.log('coordO', coordO);
      const [a,b] = coordO;
      const qO = towers[i][towers.length - 1];
      const dO = (x-a)*(x-a) + (y-b)*(y-b);
      const d = Math.floor(Math.sqrt(dO));
      const q = Math.floor(qO / (1 + d));
      sum += q
    }
    console.log('sum', sum);
    maxSum = Math.max(maxSum, sum)
    
  }

  // for (const tower of towers) {

  //   const coordinates = tower.splice(0,2);
  //   console.log('coordinates', coordinates);


  //   const [a,b] = coordinates;
  //   const qO = tower[tower.length - 1];
  //   console.log('qO', qO)
  //   const dQ = (x-a)*(x-a) + (y-b)*(y-b);
  //   const d = Math.floor(Math.sqrt(dQ));
  //   console.log('d', d); 
  //   const q = Math.floor(qO / (1 + d))
  //   console.log('q', q);
  //   sum += q
  // }

  // console.log('sum', sum);
};
console.log('bestCoordinate', bestCoordinate([[1,2,5],[2,1,7],[3,1,9]], 2));

export {
  test
}