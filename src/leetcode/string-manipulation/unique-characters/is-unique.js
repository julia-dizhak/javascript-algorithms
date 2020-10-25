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


/*
Approach use hash

time is O(n)
space is O(n)
*/
function isUniqueUseHash(str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = (hash[str[i]] || 0) + 1; 
  }

  for (const key in hash) {
    if (hash[key] > 1) return false
  }
  return true;
}

// the same approach
function isUniqueUseHash1(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (hash[thisChar]) return false;
    hash[thisChar] = true
  }

  return true;
}

/*
Approach Sort

We insert every character present in the string into an array and then sort the 
array. Since the array is sorted, identical characters will appear next to each 
other.

We then go through the sorted array one by one and check if the character is the 
same as the one before it. If so, we return false. If we process the whole array, 
we can return true.

Time
The complexity of a sorting algorithm can be approximated as O(n * log(n)). 
The loop scales linearly, giving us O(n).

Since these two processes happen apart from one another, we can add their time complexities to get a value for the whole function. This gives us O(n + n * log(n)). Dropping the lower order term, we get:

O(n * log(n)).


Space Complexity
We need to store every character in an array, so our space complexity is: O(n).
*/
function isUniqueUseSort(str) {
  const chars = str.split('').sort();
  console.log('chars', chars);

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i-1]) return false;
  }

  return true;
}

/* 
Approach use Set (solution 3)

A set is similar to an object. We insert items into the set and retrieve them 
later.

One of a set’s main strengths is that it can only store one copy of each item. 
Attempts to add an item twice fail silently, so it only stores unique values.

A set also has instant insertion and retrieval of items.
*/
function isUnique(str) {
  let chars = new Set();
  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) return false;
    chars.add(str[i]);
  }

  return true;
}

/*
the same approach

If all characters are unique, the size of the set will be the same length as 
the string. If we have duplicate characters, the set will be smaller. This is 
because the set completely ignores duplicate insertions.

While time and space complexity are both also O(n) for this solution, it is, 
in general, slightly slower than Solution 3. This is because Solution 3 has a 
mechanism to short-circuit the loop if we come across a repeat character. 
This solution, on the other hand, must go through the entire string and then 
return an answer.

both versions above work for strings and arrays.
Strings and arrays are both iterable items that the set treats in the same manner.
*/
function isUnique1(str) {
  return str.length === new Set(str).size
}

// tests
// console.log(isUniqueUseSort('abcdef'));
// console.log(isUnique('89%df#$^a&x'));
// console.log(isUnique('abcAdef'));
// console.log(isUnique('abcaef'));

export {
  isUnique, isUnique1, 
  isUniqueUseHash, isUniqueUseHash1, 
  isUniqueBruteForce,
  isUniqueUseSort
}
