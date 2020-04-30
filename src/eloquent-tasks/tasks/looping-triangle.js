/**
  *   Looping a triangle
  *   Write a loop that makes seven calls to console.log to output the following triangle:
  *   #
  *   ##
  *   ###
  *   ####
  *   #####
  *   ######
  *   #######
*/
function loopingTriangle(len, symbol='#') {
  for (let line = symbol; line.length < len + 1; line += symbol) {
    console.log('line', line);
  }
}

function drawPyramid(h) {
  let line = '#';
  for (let i = 0; i <= h; i++) {
    for (let j = 1; j < i; j++) {
      line += '#';

    }
    console.log('line', line)
  }
}

/**
 * Draw a pyramid by recursion means
 * draw pyramid of size n-1 + additional row, for example
 * if h = 4, draw(4-1) + one additional loop
 *
 */
function drawPyramidUsingRecursion(h) {
  let line = '#';
  // exclude for negative numbers
  if (h === 0) {
    return
  }

  drawPyramid(h-1)
  for (let i = 0; i < h; i++) {
    line += '#';
  }
  console.log('line recursion', line)
}


drawPyramidUsingRecursion(4)
//loopingTriangle(10);

 export { loopingTriangle, drawPyramid }
