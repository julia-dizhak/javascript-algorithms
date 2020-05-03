const arr = [
  'test', 'hello', 'hu', 'test to my', 'welcome', 'hu', 'test to test', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'test', 'hello', 'hu',
  'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'test', 'hello', 'hu', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'test', 'hello', 'hu',
  'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello',
  'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello', 'morning', 'hi', 'tu', 'yes', 'no', 'test', 'hello'
];

// Use performance now
const t0 = performance.now();
const loopUsingForUsePerformance = input => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].toUpperCase());
  }
  return output;
};
const t1 = performance.now();
loopUsingForUsePerformance(arr)
console.log(t0, 'milliseconds');
console.log(t1, 'milliseconds');
console.log(t1 - t0, 'milliseconds');

// Use time
console.time('test')
const loopUsingForUseTime = input => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
      output.push(input[i].toUpperCase());
  }
  return output;
};
loopUsingForUseTime(arr);
console.timeEnd('test')

// Use forEach method
function testForEach(arr) {
  console.time('test-forEach');

  const result = [];
  arr.forEach((val, index) => {
    result.push(val / 1.2 * 0.1);
  });

  console.timeEnd('test-forEach');
  return result;
}

// Use for
function testFor(arr) {
  console.time('test-fo');
  // test if len define
  const len = arr.length;

  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(arr[i] / 1.2 * 0.1);
  }

  console.timeEnd('test-forEach');
  return result;
}

const arr1 = Array(100).fill(Math.random());
testForEach(arr1);
testFor(arr1)
