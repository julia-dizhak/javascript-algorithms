/**
 * Search
 * Sherlock and array
 * Watson gives Sherlock an array of integers.
 * His challenge is to find an element of the array such that the sum of all elements
 * to the left is equal to the sum of all elements to the right.
 * For instance, given the array [5, 6, 8, 11], 8 is between two subarrays that sum to 11.
 * If your starting array is [1], that element satisfies the rule as left and right sum to 0.
 *
 * Complete the balancedSums function in the editor below. It should return a string,
 * either YES if there is an element meeting the criterion or NO otherwise.
 */

function balancedSum(arr) {
  const len = arr.length;
  if (len <= 0) return 'YES';

  let i = 0;
  let j = len - 1;
  let sum = 0;
  while (i !== j) {
    if (sum >= 0) {

      sum -= arr[j];
      j--;
    } else {
      sum +=arr[i];
      i++;
    }
  }

  return sum === 0 ? 'YES' : 'NO';
}

/**
 * this solution is not optimal and
 * count sum every loop cycle
*/
function balancedSumVariant1(arr) {
  const len = arr.length;

  let leftSum = 0;
  let rightSum = 0;
  let leftArr = [];
  let rightArr = []


  if (len === 1) {
    return 'YES'
  }

  for (let i = 1; i < len; i++) {
    leftArr = arr.slice(0, i);
    leftSum = (leftArr.length > 0) ?
      leftArr.reduce((accumulator, currentValue) => accumulator + currentValue) :
      0;

    rightArr = arr.slice(i+1); //rightArr = arr.slice(i, len);
    rightSum = (rightArr.length > 0) ?
      rightArr.reduce((accumulator, currentValue) => accumulator + currentValue) :
      0;

    if (leftSum === rightSum) {
      return 'YES'
    }
  }

  return 'NO'
}

export { balancedSum, balancedSumVariant1 }
