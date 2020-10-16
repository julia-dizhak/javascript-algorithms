/*
Challenge

Given an array of size n, remove all even integers from it.

Hint 1
Check if a number is even by dividing it by 2 and looking at the remainder. 
If it’s zero, then the number is even. (use % for checking remainder)
*/

/*
Approach use lambda filter

Time complexity
Since the entire array has to be iterated over, this solution is in O(n).
*/
function removeEven(arr) {
  return arr.filter((v => (v % 2) != 0));
}
//console.log('removeEven', removeEven([1,2,4,5,10,6,3]));

export {
  removeEven
}
