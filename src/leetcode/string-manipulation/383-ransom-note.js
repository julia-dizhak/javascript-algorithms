/**
 * Leetcode javascript
 * 383 Ransom note
 * easy
 *
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines;
 * otherwise, it will return false.
 *
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Note:
 * You may assume that both strings contain only lowercase letters.
*/
var canConstruct = function(ransomNote, magazine) {
  const len1 = magazine.length;
  const len2 = ransomNote.length;
  const hash = {};

  // you don't need to split the strings into an array of characters. Array notation works fine on strings, as Javascript stores strings as a list of characters anyways.
  for (let i = 0; i < len1; i++) {
    const char = magazine[i];
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let j = 0; j < len2; j++) {
    hash[ransomNote[j]] = (hash[ransomNote[j]] || 0) - 1;
    if (hash[ransomNote[j]] < 0) {
      return false
    }
  }

  return true
}

// to check
var canConstruct1 = function(ransomNote, magazine) {
  if ( ransomNote.length > magazine.length ) return false;
  const oldMagazineLength = magazine.length;
  ransomNote.split('').forEach(item => {
      magazine = magazine.replace(item, '');
  });
  return oldMagazineLength == magazine.length + ransomNote;
};

// Microsoft | OA 2019 | String Without 3 Identical Consecutive Letters
// microsoft
//Write a function solution that, given a string S of N lowercase English letters,
// returns a string with no instances of three identical consecutive letters,
// obtained from S by deleting the minimum possible number of letters
// Examples: Given S = “eedaaad” , the function should return “eedaad” .
// One occurrence of letter a is deleted.

var noThreeIdenticalLetters = function(s) {
  const letters = {};

  for (const letter of s) {
    letters[letter] = (letters[letter] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (letters[char] >= 3) {
      const firstIndex = s.indexOf(char);
      const lastIndex = i;
      const substr = s.substring(firstIndex, lastIndex+1);
      const substr1 = substr.slice(0,2);
      console.log('substr', substr)
      console.log('substr1', substr1)
      // return begin str + cutted + end
      // console.log('index', i);
      // console.log('char', char);

    }
  }

  // s.slice(firstIndex, firstIndex + 2)
  // s.substring(firstIndex, 5+1)
  console.log('letters', letters)

  return s
}

//console.log(noThreeIdenticalLetters('eedaaad'))
//given S=“uuuuxaaaaxuuu” the function should return “uuxaaxuu”


/**
 * Leetcode
 * 169 Majority element
 * medium
 *
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * brute force approach
 * [2, 2, 2, 4, 7, 9, 6, 5, 66] doesn/t work

2
count =3 > lenth/2 -> 2

sum([1, 1])

most visited and majority it's a different task
 * space o(1)
 *
 * sorting
 *
 * Arrays.sort(nums);
        return nums[nums.length/2];

  candidates Boyer-Moore
  Moore majority vote explained using a school dance analogy
 *
 *
 * second variant
 * majority element 2
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * Note: The algorithm should run in linear time and in O(1) space.
 *
 * @param {number[]} nums
 * @return {number[]}
 *

 */

 /**
 * @param {number[]} arr
 * @return {number}
 */
var majorityElement1 = function(arr) {
  const len = arr.length;
  let res = []
  // if (nums.length === 0) {
  //   return [];
  // }

  if (arr.length === 1) {
    return arr[0]
  }
  const hash = {};

  for (const num of arr) {
    hash[num] = (hash[num] || 0) + 1
  }

  for (const key in hash) {
    if (hash[key] > len / 3)  {
      res.push(key)
    }
  }

  // todo check why it's string
  return res
}

var majorityElement = function(arr) {
  const len = arr.length;
  // if (nums.length === 0) {
  //   return [];
  // }

  if (arr.length === 1) {
    return arr[0]
  }
  const hash = {};

  for (const num of arr) {
    hash[num] = (hash[num] || 0) + 1
  }

  for (const key in hash) {
    if (hash[key] > len / 2)  {
      return key
    }
    //if (Object.keys(hash) > len/2)
  }

  console.log('hash', hash)
  // for (let i = 0; i < arr.length; i++) {
  //   //debugger
  //   if (hash[arr[i]] > hash[arr[i+1]]) {
  //     return arr[i]
  //   } else return arr[i+1]
  // }

}
// console.log('majorityElement', majorityElement([3,2,3]));
// console.log('2 test', majorityElement([2,2,1,1,1,2,2]));
console.log('majorityElement', majorityElement([1]));
console.log('majorityElement', majorityElement([2,2]));
console.log('3 test', majorityElement([8,8,7,7,7]));




export { canConstruct }
