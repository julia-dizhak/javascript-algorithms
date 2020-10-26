/*
Flatten array

As in the last problem, we have to process every item we receive. There’s no way
to get around that so the best time complexity we can hope for is O(n).
*/
const nestedArr = [1, 2, [3], [4, [5]] ];

/* 
Solution for only 1 nesting 

This problem is easier to discuss step-by-step. First, we’ll figure out how to 
flatten arrays only a single level deep.

This means nesting is only 1 level deep. We’re aiming to flatten arrays like 
this: [[1, 2, 3], 4, 5, [6], [7], [8, 9], 10]

This function flattens arrays only one level deep. We go through our input array
one by one and perform a check on each item.

If the item we’re currently processing is not an array, we push it into 
our new array.

If it is an array, we push each individual item into our new array.
*/
function flattenArrNesting(nestedArray) {
  const newArray = [];

  for(let i = 0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];
    
    if (Array.isArray(thisItem)) {
      for(let j = 0; j < thisItem.length; j++) {
        newArray.push(thisItem[j]);
      }
    } else {
      newArray.push(thisItem);
    }
  }
  
  return newArray;
}
// tests
//console.log('flattenArrNesting', flattenArrNesting([[1, 2, 3], 4, 5, [6], [7], [8, 9], 10]));

/*
Approach Recursion = Repeating the Strategy

To be able to flatten arrays that are indefinitely nested, we’ll need to repeat 
this process. We’ll need a recursive function.

When we encounter an array, we need to run our function on that array.

Notice that the only difference between the two code blocks is line 8. Rather 
than passing each value inside thisItem to newArray, we first run thisItem through 
the flatten function.

time
Line 10 may make this function seem like it’s O(n^2) - we have a for-loop inside
a for-loop, which usually results in O(n^2). However, the inner loop only processes 
what the outer loop skips over.

For example, take the array [1, 2, [3, 4, 5], 6, 7]. The outer array only has 5 
elements in it:
1
2
[3, 4, 5]
6
7
This means the outer forEach loop will essentially skip over 3, 4, and 5, leaving 
the inner for-loop to deal with those.

The final time complexity is: O(n)
because the inner and outer loops operate on different items. No item is processed 
twice.

Space is O(n).
Every item is stored in the brand new array.
*/
function flatten(nestedArray) {
  let newArr = [];

  for (let i = 0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];

    if (Array.isArray(thisItem)) {
      const flatItem = flatten(thisItem);

      for (let j = 0; j < flatItem.length; j++) {
        newArr.push(flatItem[j]);
      }
    } else {
      newArr.push(thisItem);
    }
  }

  return newArr;
}

// tests
//console.log('flatten', flatten([[1, 2], 3]));
//console.log('flatten', flatten([ [1, 2], 4, [6], [7]]));
//console.log('flattenArr1', flattenArr1([ [1, 2, [3]], 4, [6], [7], [8, 9]]));


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

// todo check task 341 leetcode and 385
export {
  flatten,
  flattenArr
}