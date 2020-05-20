/**
 * Eloquent Reversing an array
 * Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace.
 *
 * The first, reverseArray, takes an array as argument and produces a new array
 * that has the same elements in the inverse order.
 *
 * The second, reverseArrayInPlace, does what the reverse method does:
 * it modifies the array given as argument by reversing its elements.
 *
 * Neither may use the standard reverse method.
 *
 * Thinking back to the notes about side effects and pure functions in the previous chapter,
 * which variant do you expect to be useful in more situations? Which one runs faster
 *
 */

const reverseArray = function(arr) {
  const len = arr.length;
  let reverse = [];

  for (let i = len - 1; i >=0; i--) {
    reverse.push(arr[i]);
  }

  return reverse;
}

const reverseArrayUsePop = function(arr) {
  const len = arr.length;
  let reverse = [];

  for (let i = 0; i < len; i++) {
    let last = arr.pop();
    reverse.push(last)
  }


  return reverse;
}


function reverseArrayInPlace(arr) {
  const len = arr.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    let old = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = old
  }

  return arr;
}

export { reverseArray, reverseArrayInPlace, reverseArrayUsePop }
