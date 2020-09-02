/**
 * Leetcode
 * medium
 * 438. Find All Anagrams in a String
 *
 * Given a string s and a non-empty string p,
 * find all the start indices of p's anagrams in s.
 *
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 * The order of output does not matter.
 *
 * Example 1:
 * Input: s: "cbaebabacd" p: "abc"
 * Output: [0, 6]
 *
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 * Example 2:
 * Input: s: "abab" p: "ab"
 * Output: [0, 1, 2]
 *
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 * Explanation:
 * it's not about anagrams, but permutation
 * sliding window approach.
 *
 * This is a problem of multiple pattern search in a string.
 * All such problems usually could be solved by sliding window approach in a linear time.
 * The challenge here is how to implement constant-time slice to fit into this linear time.
 *
 * If the patterns are not known in advance, i.e. it's "find duplicates" problem,
 * one could use one of two ways to implement constant-time slice: Bitmasks or Rabin-Karp.
 * Please check article Repeated DNA Sequences for the detailed comparison of these two algorithms.
 *
 * Here the situation is more simple: patterns are known in advance, and the set of characters in the patterns
 * is very limited as well: 26 lowercase English letters.
 * Hence one could allocate array or hashmap with 26 elements
 * and use it as a letter counter in the sliding window.
 *
*/


/*
  Approach Sliding Window + 2 counter HashMaps

  Let's start from the simplest approach: sliding window + two counter hashmaps
  letter -> its count.
  The first hashmap is a reference counter pCount for string p,
  and the second one is a counter sCount for string in the sliding window.

  The idea is to move sliding window along the string s,
  recompute the second hashmap sCount in a constant time
  and compare it with the first hashmap pCount.

  If sCount == pCount, then the string in the sliding window is a permutation
  of string p, and one could add its start position in the output list.

  Algorithm
  - Initialize 2 hashes: build reference counter pCount for string p, counter sCount for string s

  - Move sliding window along the string s:
  Recompute sliding window counter sCount at each step by adding one letter on the right
  and removing one letter on the left.

  - If sCount == pCount, update the output list.
  - Return output list.

  Complexity analysis

  Time complexity: O(N_s + N_p) since it's one pass along both strings.
  Space complexity: O(1), because pCount and sCount contain 26 elements each.
*/



/**
 * @param {{}} s
 * @param {{}} p
 * @return {boolean}
*/
const compareDict = (dictA, dictB) => {
  for (let keyA in dictA) {
    if (dictA[keyA] && dictA[keyA] !== dictB[keyA]) {
      return false;
    }
  }

  for (let keyB in dictB) {
    if (dictB[keyB] && dictB[keyB] !== dictA[keyB]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
*/
var findAnagramsUseTwoHash = function(s, p) {
  let result = [];

  if (p == null || s == null || s.length === 0 || p.length > s.length) {
    return result;
  }

  // init 2 maps
  let pCounter = {};
  let sCounter = {};
  for (let i = 0; i < p.length; i++) {
    pCounter[p[i]] = (pCounter[p[i]] || 0) + 1; // java pCounter[p.charAt(i) - 'a']++;
    sCounter[s[i]] = (sCounter[s[i]] || 0) + 1; // sCounter[s.charAt(i) - 'a']++;
  }

  let left = 0;
  let right = p.length;

  // move 2 pointers
  // <= is necessary, check case ('ab', 'ba')
  while (right <= s.length) {
    if (compareDict(pCounter, sCounter)) {
      result.push(left)
    }

    // adding one letter on the right
    sCounter[s.charAt(right)] = (sCounter[s.charAt(right)] || 0) + 1;
    right++;

    // removing one letter on the left
    sCounter[s.charAt(left)]--;
    left++;
  }

  return result;
}

// The same approach but using a map
var findAnagramsUseMap = function(s, p) {
  let anagrams = [];
  if (p == null || s == null || s.length === 0 || p.length > s.length) {
    return anagrams;
  }

  const map = new Map();

  for (let i = 0; i < p.length; i++) {
    if (map.has(p.charAt(i))) {
      map.set(p.charAt(i), map.getChart(i) + 1);
    } else {
      map.set(p.charAt(i), 1);
    }
  }

  let left = 0;
  let right = 0;
  let counter = map.size;

  while (right < s.length) {
    const endChar = s.charAt(right);
    if (map.has(endChar)) {
      map.set(endChar, map.get(endChar) - 1);
      if (map.get(endChar) === 0) counter--;
    }
    right++;

    while (counter === 0) {
      if (right - left === p.length) {
        anagrams.push(left)
      }

      const startChar = s.charAt(left);
      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1);
        if (map.get(startChar) > 0) counter++;
      }
      left++
    }

  }

  return anagrams;
};


// todo it seems it's not an approach 1
var findAnagramsUseWhileLoop = function(s, p) {
  let anagrams = [];
  if (s === null || s === undefined || s.length === 0) {
    return []
  }

  let pCounter = {};

  // populate pCounter - frequency letter
  for (let i = 0; i < p.length; i++) {
    pCounter[p[i]] = (pCounter[p[i]] || 0) + 1;
  }

  // sliding window approach, we gonna have 2 bounds
  let left = 0;
  let right = 0;
  let count = p.length;

  // right hit the boundary first
  while (right < s.length) {
    if ( pCounter[s.charAt(right++)]-- >= 1 ) count--;

    // found index
    if (count === 0) anagrams.push(left);

    // don't understand this string
    if (right - left === p.length && pCounter[s.charAt(left++)]++ >= 0) count++;
  }

  return anagrams;
}

// todo
var findAnagrams = function(s, p) {
  let pCounter = {};
  let anagrams = [];

  if (s === null || s === undefined || s.length === 0) {
    return []
  }

  for (let i = 0; i < p.length; i++) {
    pCounter[p[i]] = (pCounter[p[i]] || 0) + 1;
  }

  //console.log('p', pCounter);

  let left = 0,
    right = 0,
    count = p.length;

  while (right < s.length) {
    if (pCounter[s[right]] !== undefined) {
      pCounter[s[right]]--;
      if (pCounter[s[right]] === 0) {
        count--;
      }
    }
    right++;

    while (count === 0) {
      if (pCounter[s[left]] !== undefined) {
        pCounter[s[left]]++;
        if (pCounter[s[left]] > 0) {
          count++;
        }
      }
      if (right - left === p.length) {
        anagrams.push(left);
      }
      left++;
    }
  }
  return anagrams;
};


// public IList<int> FindAnagrams(string s, string p)
// {

//     List<int> res = new List<int>();
//     if (s.Length < p.Length)
//         return res;

//     // chars needed to form an anagram
//     Dictionary<char, int> need = new Dictionary<char, int>();
//     foreach (char c in p)
//     {
//         if (need.ContainsKey(c))
//             need[c]++;
//         else
//             need.Add(c, 1);
//     }

//     int left = 0, right = 0; // left and right boundary of the sliding window
//     int counter = need.Count; // number of unique char needed to form an anagram
//     while (right < s.Length)
//     {
//         char currChar = s[right];
//         if (need.ContainsKey(currChar))
//         {
//             // decrease needed currChar when it is included in the sliding window
//             need[currChar]--;

//             // need[currChar] = 0, sliding window has the exact number of [currChar] needed to form an anagram
//             // need[currChar] > 0, sliding window has less [currChar] than needed to form an anagram
//             // need[currChar] < 0, sliding window has more [currChar] than needed to form an anagram
//             if (need[currChar] == 0)
//                 counter--;
//         }
//         right++;

//         // counter == 0 means all the needed chars to form an anagram are within the sliding window
//         // since the silding window may or may not have unnecessary chars, we need the shrink it.
//         while (counter == 0)
//         {
//             // when the size of the sliding window == p.Length, an anagram is founded
//             if (right - left == p.Length)
//                 res.Add(left);

//             // move the left boundary to shrink the sliding window
//             // before moving the left boundary, we need to update need<char, int>
//             char charLeft = s[left];
//             if (need.ContainsKey(charLeft))
//             {
//                 need[charLeft]++; // incrase the needed charLeft since it will be removed from the sliding window
//                 if (need[charLeft] > 0) // sliding window has less [charLeft] than needed to form an anagram
//                     counter++;
//             }
//             left++;
//         }
//     }

//     return res;
// }



//console.log(findAnagrams('cbaebabacd', 'abc'));
//console.log(findAnagrams('abc', 'abc'));


// /**
//  * @param {string} str
//  * @param {string} pattern
//  * @return {number[]}
//  */
// var findAnagrams = function(str, pattern) {
//   // Convert pattern string to hash-map.
//   const patternMap = wordToMap(pattern);

//   // Array that will hold our anagram start indices.
//   const patternIndices = [];

//   // Clone the pattern string map for further modifications.
//   let currentPatternMap = {...patternMap};

//   // We'll be using sliding frame to find anagrams.
//   let frameStart = 0;
//   let frameLength = 0;
//   let wordIndex = 0;

//   // Go through all letters in a string.
//   while (wordIndex < str.length) {
//     // Get current letter.
//     const letter = str[wordIndex];

//     // Depending on the current letter we may have several cases.
//     if (!currentPatternMap.hasOwnProperty(letter)) {
//       // No such letter in the pattern.

//       // Reset letters counter.
//       currentPatternMap = {...patternMap};
//       // Reset and shift the frame to the next letter.
//       frameStart = wordIndex + 1;
//       frameLength = 0;
//     } else if (currentPatternMap[letter] === 0) {
//       // There is no unused letter instances left.

//       // Add the first letter of the found anagram back to the map.
//       const letterToRelease = str[frameStart];
//       currentPatternMap[letterToRelease] += 1;

//       // Shift frame right and reduce it.
//       frameLength -= 1;
//       frameStart += 1;
//     } else {
//       // The letter is in the pattern and we may use it.

//       // Reduce the number of used letter instances and expand the frame.
//       currentPatternMap[letter] -= 1;
//       frameLength += 1;

//       // If we've found an anagram...
//       if (frameLength === pattern.length) {
//         // Remember the start of the anagram.
//         patternIndices.push(frameStart);

//         // Add the first letter of the found anagram back to the map.
//         const letterToRelease = str[frameStart];
//         currentPatternMap[letterToRelease] += 1;

//         // Shift frame right and reduce it.
//         frameLength -= 1;
//         frameStart += 1;
//       }
//     }

//     // Go to the next letter.
//     wordIndex = frameStart + frameLength;
//   }

//   // Return anagram indices that we've found.
//   return patternIndices;
// };

// // Function that converts string to string map (counts the number of letters).
// function wordToMap(str) {
//   return Array.from(str).reduce((stringMap, letter) => {
//     if (!stringMap.hasOwnProperty(letter)) {
//       stringMap[letter] = 1;
//     } else {
//       stringMap[letter]++;
//     }

//     return stringMap;
//   }, {});
// }

export {
  compareDict,

  findAnagramsUseTwoHash,
  findAnagramsUseMap,

  findAnagramsUseWhileLoop,
  findAnagrams
}
