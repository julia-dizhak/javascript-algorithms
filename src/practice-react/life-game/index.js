//const new2dArray = new Array(rows).fill(new Array(cols).fill(0))
function make2DArray(cols, rows) {
  // x is column
  // y is row
  let arr = new Array(cols);
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}

//let gridTest = make2DArray(3,3);
//console.table('gridTest', gridTest); 

// global variables
let grid;
let resolution = 40;
let rows;
let cols;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function setup() {
  // init
  const root = document.getElementById('game');
  //console.log(root)
  const element = document.createElement('canvas'); 
  element.id = 'grid';
  root.appendChild(element);

  let width = 400;
  let height = 400;

  //
  //createCanvas(400, 400);
  drawGrid(width, height, 'grid');

  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);

  // random
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = getRandomInt(2);
      //grid[i][j] = 1
    }
  }


  console.table('grid', grid);


}

var drawGrid = function(w, h, id) {
  var canvas = document.getElementById(id);
  console.log('canvas', canvas)
  //debugger
  var ctx = canvas.getContext('2d');
  ctx.canvas.width  = w;
  ctx.canvas.height = h;

  for (let x=0; x <= w; x+=20) {
    for (let y=0; y <= h; y+=20) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }
}

// function draw() {
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i * resolution;
//       let y = j * resolution;
//       if (grid[i][j] == 1) {
//         // fill(255);
//         // rect(x, y, resolution, resolution)
//       }
//     }
    
//   }
// }

//setup();

export {
  setup
}


