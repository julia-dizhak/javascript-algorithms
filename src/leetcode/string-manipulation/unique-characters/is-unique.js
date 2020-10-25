/*
Create a function that determines whether all characters in a string are unique 
or not. Make it case-sensitive, meaning a string with both 'a' and 'A' could 
pass the test.

*/

/*
Brute-force

We go through the entire string. At each character, we make sure that the final 
index of the character is the same as the index our loop is currently on.

If this check fails, we know that the letter appears again further down the 
string. We can immediately return false. If we get to the end, we’ve ensured 
that all characters are unique and can return true.

Time
We have a for-loop that’s going through every letter in the string, so we start 
with O(n).

Inside the loop, the call to str.lastIndexOf() runs through our string backward. 
It’s another loop. When we’re on our first letter, assuming the string has only 
unique characters, it’ll run through the entire string from back to front.

As we approach the end of the string, lastIndexOf() has to traverse fewer 
characters to get to our index. On average, lastIndexOf will go through half the
length of the string on each iteration. This means lastIndexOf has a time 
complexity of O(1/2 * n), which becomes O(n) after dropping the constant.

Since this call to lastIndexOf() is nested inside our for-loop, we multiply their 
time complexities, bringing our final time complexity to O(n^2).

Space
No matter how large the string, we only ever use one variable in our function: 
i. This shows us that our function uses constant space, or: O(1)
*/
function isUniqueBruteForce(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i ) {
      return false
    }
  }
  return true;
}


function isUnique(str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = (hash[str[i]] || 0) + 1; 
  }
  console.log('hash', hash);
  for (const key in hash) {
    if (hash[key] > 1) return false
  }
  return true;
}

// tests
console.log(isUnique('abcdef'));
console.log(isUnique('89%df#$^a&x'));
console.log(isUnique('abcAdef'));
console.log(isUnique('abcaef'));

export {
  isUnique,
  isUniqueBruteForce
}