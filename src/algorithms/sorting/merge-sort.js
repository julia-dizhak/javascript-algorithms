/**
 *  Merge sort is pretty efficient and the best way to conceptualize merge sort is recursively.
 *  So suppose we have large array and we want to sort it.
 *  What if we could magically sort the left half and sort the right half,
 *  and then get back two sorted halves.
 *  When if you want to have the whole array sorted all we have to do is merge those
 *  in in sorted order and that's merge sort is.
 *  So we apply merge sort to the left half, apply to the right half
 *  and merge those back in order
 *  It always give us n log n runtime. There is no case than array looks really funky.
 *  The downside is merging 2 arrays together requires extra space - O(n) space
 */

function merger(left, right) {
  let singleSorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      singleSorted.push(left[0]);
      left.shift();
    } else {
      singleSorted.push(right[0]);
      right.shift();
    }
  }

  // need to concat here because there will be one element remaining from either left or the right
  return singleSorted.concat(left, right);
}

function mergeSort(arr) {
  // it means we no longer divide the array into smaller chunks
  if ( arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return merger(mergeSort(left), mergeSort(right))
}


function wrapValue(n) {
  var localVariable = n;
  //why I can't simple return here return localVariable;

  return function() {
    //console.log('local variable', localVariable)
    return localVariable;
  }
}
var wrap1 = wrapValue(1);
// console.log('wrap1', wrap1());

var wrap2 = wrapValue(2);
// console.log('wrap2', wrap2());


export { mergeSort, merger }
