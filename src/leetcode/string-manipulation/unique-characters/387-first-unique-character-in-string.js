/*
Leetcode
387 First Unique Character in a String
easy

Given a string, find the first non-repeating character in it and return it's index.
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

Note: You may assume the string contain only lowercase letters.
*/

/*
Approach use Hash 
linear time solution

The best possible solution here could be of a linear time
because to ensure that the character is unique you have to check the whole string 
anyway.

Time complexity: O(N) since we go through the string of length N two times.
Space complexity: 
O(N) since we have to keep a hash map with N elements.
O(1) because English alphabet contains 26 letters.
*/
var firstUniqueCharUseHash = function(s) {
  const frequencies = {};

  for (const char of s) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // first non-repeating character
    if (frequencies[char] === 1) {
      return i;
    }
  }

  return -1
}

/*
Use Map

time is O(n)
space is O(n)
*/
var firstUniqueCharUseMap = function(s) {
  if (!s || !s.length) return -1;
  let cache = new Map();

  for (const char of s) {
    cache.set(char, cache.get(char) + 1 || 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (cache.get(s[i]) == 1) return i;
  }

  return -1
}

/*
Approach use indexOf, lastIndexOf

time is O(n^2)
*/
var firstUniqueChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }

  return -1
}


/**
Calculate unique symbols in string

time O(n)
space O(n) / O(1)
*/
var countSymbols = function(str) {
  let map = new Map();
  let keys = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let newValue = 1;

    if (map.has(char)) {
      newValue += map.get(char)
    }
    map.set(char, newValue)
  }

  for (let key of map) {
    keys.push(key[0]);
  }

  return keys;
}


export { 
  firstUniqueChar, firstUniqueCharUseHash, firstUniqueCharUseMap,
  countSymbols 
}
