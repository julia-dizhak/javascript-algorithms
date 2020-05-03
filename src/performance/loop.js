const arr = [
  'test', 'hello', 'hu', 'test to my', 'welcome', 'hu', 'test to test', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'test', 'hello', 'hu',
  'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'test', 'hello', 'hu', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'test', 'hello', 'hu',
  'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello',
  'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello'
];

// perforamce now §
//const t0 = performance.now();
// const loopUsingFor = input => {
//   let output = [];
//   for (let i = 0; i < input.length; i++) {
//       output.push(input[i].toUpperCase());
//   }
//   return output;
// };

// let output = [];
// for (let i = 0; i < arr.length; i++) {
//   output.push(arr[i].toUpperCase());
// }
// //return output;
// const t1 = performance.now();
// // loopUsingFor(arr);
// console.log(t0, 'milliseconds');
// console.log(t1, 'milliseconds');
// console.log(t1-t0, 'milliseconds');

// performance now
// const t0 = performance.now();
// const loopUsingFor = input => {
//   let output = [];
//   for (let i = 0; i < input.length; i++) {
//       output.push(input[i].toUpperCase());
//   }
//   return output;
// };
// const t1 = performance.now();

// console.log(t0, 'milliseconds');
// console.log(t1, 'milliseconds');
// console.log(t1-t0, 'milliseconds');

// // performance now
console.time('test')
const loopUsingFor = input => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
      output.push(input[i].toUpperCase());
  }
  return output;
};
// loopUsingFor(arr);
console.timeEnd('test')

//
function testForEach(x) {
  console.time('test-forEach');

  const result = [];
  x.forEach((val, index) => {
    result.push(val / 1.2 * 0.1);
  });

  console.timeEnd('test-forEach');
  return result;
}

function testFor(arr) {
  console.time('test-fo');
  // arr.len const

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] / 1.2 * 0.1);
  }

  console.timeEnd('test-forEach');
  return result;
}


const x = Array(100).fill(Math.random());
console.log('x', x)
testForEach(x);
testFor(x)




// for loop
// const loopUsingFor = input => {
//   let output = [];
//   for (let i = 0; i < input.length; i++) {
//       output.push(input[i].toUpperCase());
//   }
//   return output;
// };

// console.time('loopUsingFor');
// // loopUsingFor(arr)
// console.log('loopUsingFor', loopUsingFor(arr));
// console.timeEnd('loopUsingFor');




// // forEach
// let loopByForEach = input => {
//   let output = [];

//   input.forEach(function(value) {
//       output.push( value.toUpperCase() );
//   });

//   return output;
// };

// console.time('loopByForEach');
// console.log('loopByForEach', loopByForEach(arr));
// console.timeEnd('loopByForEach');

// // map
// let loopByMap = input => input.map(
//   value => value.toUpperCase()
// );

// console.time('loopByMap');
// console.log('loopByMap', loopByMap(arr));
// console.timeEnd('loopByMap');


export { loopUsingFor  }


