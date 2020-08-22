/*
Leetcode
60 Permutation sequence
medium

The set [1,2,3,...,n] contains a total of n! unique permutations.
By listing and labeling all of the permutations in order, we get the
following sequence for n = 3:
"123"
"132"
"213" k = 3 // 2 + perm(1,3)
"231"
"312" // 3 + perm(1,2)
"321" // 3 + perm(1,2)

Given n and k, return the kth permutation sequence.

Note:
Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.

Example 1:
Input: n = 3, k = 3
Output: "213"


Example 2:
Input: n = 4, k = 9
Output: "2314"
*/

/*
Approach brute force

we can calculate every single permutations,
it's not too hard
and just return kth sequence in the list
But that's can take n! time complexity
*/


/*
Approach Math

we now it's sorted.

say n = 4, you have {1, 2, 3, 4}, k = 14

step 1
If you were to list out all the permutations you have

1 + (permutations of 2, 3, 4)

2 + (permutations of 1, 3, 4)

3 + (permutations of 1, 2, 4)

4 + (permutations of 1, 2, 3)

We know how to calculate the number of permutations of n numbers ... n!
So each of those with permutations of 3 numbers means there are 6 (3!) possible permutations.
Meaning there would be a total of 24 permutations in this particular one.

first block (all )
1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
...

So if you were to look for the (k = 14) 14th permutation, it would be in the
3 + (permutations of 1, 2, 4) subset.

To programmatically get that, you take k = 13 (subtract 1 because of things always
starting at 0) and divide that by the 6 we got from the factorial, which would give
you the index of the number you want.
In the array {1, 2, 3, 4}, (k-1)/(n-1)! = 13/(4-1)! = 13/3! = 13/6 = 2 (= index).
The array {1, 2, 3, 4} has a value of 3 at index 2. So the first number is a 3.

step 2
Then the problem repeats with less numbers.
The permutations of {1, 2, 4} would be:

1 + (permutations of 2, 4)

2 + (permutations of 1, 4)

4 + (permutations of 1, 2)

But our k is no longer the 14th, because in the previous step, we've already
eliminated the 12 4-number permutations starting with 1 and 2.
So you subtract 12 from k.. which gives you 1.
Programmatically that would be...
k = k - (index from previous) * (n-1)! = k - 2*(n-1)! = 13 - 2*(3)! = 1

In this second step, permutations of 2 numbers has only 2 possibilities,
meaning each of the three permutations listed above a has two possibilities,
giving a total of 6. We're looking for the first one, so that would be in the
1 + (permutations of 2, 4) subset.

Meaning: index to get number from is k / (n - 2)! = 1 / (4-2)! = 1 / 2! = 0..
from {1, 2, 4}, index 0 is 1

so the numbers we have so far is 3, 1... and then repeating without explanations.

step 3
{2, 4}
k = k - (index from pervious) * (n-2)! = k - 0 * (n - 2)! = 1 - 0 = 1;
third number's index = k / (n - 3)! = 1 / (4-3)! = 1/ 1! = 1... from {2, 4},
index 1 has 4
Third number is 4

step 4
{2}
k = k - (index from pervious) * (n - 3)! = k - 1 * (4 - 3)! = 1 - 1 = 0;
third number's index = k / (n - 4)! = 0 / (4-4)! = 0/ 1 = 0... from {2}, index 0 has 2
Fourth number is 2

Giving us 3142. If you manually list out the permutations using DFS method,
it would be 3142.
Done! It really was all about pattern finding.

...
k = 5
index = 5 - 1 = 4
factorial = 3! = 6
index / factorial

Time is O(n)
The complexity is actually O(n^2), since remove in an arrayList will take O(n) complexity.
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let factorial = new Array(n+1);
  let nums = [];
  // create an array of factorial lookup
  let sum = 1;

  factorial[0] = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
    factorial[i] = sum;
  }
  // factorial[] = {1, 1, 2, 6, 24, ... n!} n = 4
  // factorial[] = {1, 1, 2, 6} if n = 3

  // alternative
  // let nums = Array.from({length: n}, (v, i) => i+1);
  for (let i = 1; i <= n; i++) {
    nums.push(i)
  }
  // numbers = {1, 2, 3, 4} if n =4
  // numbers = {1, 2, 3} if n =3

  // because starts from 0
  k--;

  let res = '';
  for (let i = 1; i <= n; i++) {
    let index = Math.floor(k / factorial[n-i]); // decide to use which permutation set
    res += nums[index];
    // remove index
    // The splice() method changes the contents of an array by removing or
    // replacing existing elements and/or adding new elements in place.
    if (index > -1) {
      nums.splice(index, 1);
    }

    k -= index * factorial[n-i]; //
  }

  // for (let i = n; i>0; i--) {
  //   let index = Math.ceil(k / factorial[i - 1]); // decide to use which permutation set
  //   //debugger;
  //   // index 2, index 2, index 1, index 1
  //   res += nums[index - 1];
  //   nums.splice(index - 1, 1);
  //   k -= (factorial[i-1] * (index - 1)); // k = 3, k = 1, k = 1, k = 1
  // }


  return res;
};

// todo
// var getPermutation = function(n, k) {
//   var fact=[];
//   var l=[];
//   fact[0]=1;
//   for(var i=1;i<n;i++)
//   {
//     fact[i]=i*fact[i-1];
//   }
//   for(var i=1;i<=n;i++) {
//     l.push(i);
//   }
//   k--;
//   var s="";
//   for(i=n-1;i>=0;i--)
//   {
//     var index=Math.floor(k/fact[i]);
// 	s=s+""+l.splice(index,1)[0];
// 	k=k%fact[i];
//   }
//   return s;
// };


//console.log('getPermutation', getPermutation(4, 9))

export {
  getPermutation
}
