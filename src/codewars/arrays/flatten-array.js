/*
As in the last problem, we have to process every item we receive. There’s no way to get around that so the best time complexity we can hope for is O(n).
*/
const nestedArr = [1, 2, [3], [4, [5]] ];

// 1st approach
const flattenArr = arr => {
  return arr.reduce(
    (accumulator, iterationVal) => 
      Array.isArray(iterationVal) 
        ? [...accumulator, ...flattenArr(iterationVal)] 
        : [...accumulator, iterationVal]
      ,
      []
  );
};

//console.log(flattenArr(nestedArr));

// 2 approach
const flattenArr2 = nestedArr.flat(2);
//console.log('flattenArr2', flattenArr2) 
