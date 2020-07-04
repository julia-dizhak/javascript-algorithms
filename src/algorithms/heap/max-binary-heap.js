/*
Implementation
We can use a class to implement adding and removing from the heap,
but we need a way to store the values in order. What kind of data structures
do we know in JavaScript that have a specific order? Arrays do!
The first element in the array is the root node. The left child is the second
item and the right child is the third item, etc

Complexity
time
insert is O(log n)
*/
class MaxBinaryHeap {
  constructor() {
    this.values = [];
    //this.size = this.values.length; // number of elements
  }

  // helper methods that bubbles up values from end
  bubbleUp() {
    // get index of inserted element
    let index = this.values.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1)/2);
      if (this.values[parentIndex] < this.values[index]) {
        this.swap(index, parentIndex);
        // We reassign our current index to the element’s new index if swapped,
        // and keeps testing parents in a loop until the element fits, or we reach
        // the root of the heap.
        index = parentIndex;
      } else break;
    }
    return 0
  }

  // swim or bubble up
  swim(index) {
    // if index starts from 0
    while (index > 1) {
      // get parent index via formula
      const parentIndex = Math.floor((index - 1)/2);
      if (this.values[parentIndex] < this.values[index]) {
        this.swap(index, parentIndex);
        // change current index to parent index
        index = parentIndex
      } else break;
    }

    return 0;
  }

  // method that pushes new value onto the end and calls the bubble helper
  insertOntoEnd(val) {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  // method that pushes new value and calls the bubble helper
  insert(val) {
    let size = this.values.length;
    // (size > 0) ? this.values[++size] = val : this.values[0] = val
    // //this.values[++size] = val;
    this.values.push(val);
    this.swim(size);
    return this.values;
  }



  // helper methods
  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(20);
heap.insert(80);
heap.insert(30);
heap.insert(70);
heap.insert(40);

// heap.insertOntoEnd(100);
// heap.insertOntoEnd(20);
// heap.insertOntoEnd(80);
// heap.insertOntoEnd(30);
// heap.insertOntoEnd(70);
// heap.insertOntoEnd(40);

console.log('heap', heap)



// todo check a solution
// write a test -2147483648
/*
Leetcode
263 Ugly number
easy

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example 1:
Input: 6
Output: true
Explanation: 6 = 2 × 3

Example 2:
Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
Example 3:

Input: 14
Output: false
Explanation: 14 is not ugly since it includes another prime factor 7.

Note:
1 is typically treated as an ugly number.
Input is within the 32-bit signed integer range: [−231,  231 − 1].
*/

/**
 * @param {number} num
 * @return {boolean}
 */
// doesnt' work solution
var isUgly = function(num) {
  if (num <= 0) return false;
  if (num === 1) return true;
  if (num === 2) return true;

  let divisor = 2;
  let factors = [];
  //debugger
  while (num >= divisor) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num = num / 2; // remove duplicates
    } else divisor++;
  }

  console.log('factors', factors);

  // /final condition to check if the array has anything greater than 5 because we ideally need array with 2, 3 or 5
  for (let i = 0; i < factors.length; i++) {
    if (factors[i] > 5) return false; // is it good solution
  }

  return true
};


// var isUgly = function(num) {
//   if(num<=0) return false;
//   while(parseInt(num/2)===num/2) { num/=2; }  // using the fact that
//   while(parseInt(num/3)===num/3) { num/=3; }  // multiplication is commutative,
//   while(parseInt(num/5)===num/5) { num/=5; }  // hence the order doesn't matter
//   return num===1;
// };
// It works equally well to simply check if num%prime === 0 instead of parseInt(num/prime)===num/prime


// var isUgly = function(num) {
//   if(num === 0) {
//       return false;
//   }

//   if(num === 1 || num === 2 || num === 3 || num === 5) {
//       return true;
//   }

//   if(num % 2 === 0) {
//       return isUgly(num / 2);
//   }

//   if(num % 3 === 0) {
//       return isUgly(num / 3);
//   }

//   if(num % 5 === 0) {
//       return isUgly(num / 5);
//   }

//   return false;
// };

//console.log('isUgly', isUgly(14))
console.log('isUgly', isUgly(21))

// todo check a solution
/*
Leetcode
204 Count primes

Count the number of prime numbers less than a non-negative number, n.

Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Hint 1
Let's start with a isPrime function. To determine if a number is prime, we need
to check if it is not divisible by any number less than n.
The runtime complexity of isPrime function would be O(n) and hence counting
the total prime numbers up to n would be O(n2). Could we do better?
*/
function isPrime(n) {
  if ( n === 1) return true;
  if ( n === 2) return true;

  let divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) return false;
    else divisor++;
  }
  return true
}

console.log('isPrime', isPrime(4))

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function(n) {

// };

// prime factors
const primeFactors = function(n) {
  let factors = [];
  let divisor = 2;

  if (n === 1) return 1;
  if (n === 2) return [1,2];

  while (n >= divisor) {
    //debugger
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor; // explanation
    } else divisor++
  }

  return factors
}

//console.log('primeFactors', primeFactors(14))
console.log('primeFactors', primeFactors(6))

/*
Ugly number II

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly
numbers.

Note:
1 is typically treated as an ugly number.
n does not exceed 1690.

Hint 1
The naive approach is to call isUgly for every number until you reach the nth one.
Most numbers are not ugly. Try to focus your effort on generating only the ugly ones.
*/

export {
  MaxBinaryHeap
}
