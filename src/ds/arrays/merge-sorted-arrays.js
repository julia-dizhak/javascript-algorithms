/**
 * Write a function which merges two sorted arrays of integers
 * and prints result
 * runtime O(n log n)
 * Below is just merge sort algorithm
 *
 * @param {array, array}
 * @return {array} - sorted
 */

const mergeSortedArrays = (arr1, arr2) => {
  let i = 0, // initial index for the first array
    j = 0, // initial index for the second array,
    result = [];

  const len1 = arr1.length,
    len2 = arr2.length;

  while (i < len1 && j < len2 ) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push((arr2[j]));
      j++;
    }
  }

  if (i < len1) {
    result = [...result, ...arr1.slice(i)];
  }

  if (j < len2) {
    result = [...result, ...arr2.slice(j)];
  }

  return result;
};

// other solution but also with a loop
const mergeSortedArrays1 = (arr1, arr2) => {
  let i = 1,
    j = 1,
    firstArr1 = arr1[0],
    firstArr2 = arr2[0],
    merged = [];

  const len1 = arr1.length,
    len2 = arr2.length;

  // case if one array is empty
  if (len1 === 0) {
    return arr2;
  }
  if (len2 === 0) {
    return arr1;
  }

  // if firstArr1 or firstArr2 exists we will insert to merged array
  // will go inside while loop
  // to insert: firstArr1 exists and firstArr2 doesn't exists
  // or both exists and firstArr1 < firstArr2
  // this is the critical part of the example
  while(firstArr1 || firstArr2) {
    if ( (firstArr1 && !firstArr2) || firstArr1 < firstArr2 ) {
      merged.push(firstArr1);
      firstArr1 = arr1[i++];
    } else {
      merged.push(firstArr2);
      firstArr2 = arr2[j++];
    }
  }

  return merged;
};

export { mergeSortedArrays, mergeSortedArrays1  };
