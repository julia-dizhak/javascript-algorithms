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
