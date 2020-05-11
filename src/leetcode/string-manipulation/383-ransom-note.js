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
 * 1232
 * easy
 * Hint 1 If there're only 2 points, return true.
 * 2 Check if all other points lie on the line defined by the first 2 points.
 * 3 Use cross product to check collinearity.
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
*/

// var onLine = function() {

// }

// Straight line
// tan
// The point is if we take points p1(x, y), p2(x1, y1), p3(x3, y3), slopes of any two pairs is same then p1, p2, p3 lies on same line.
// slope from p1 and p2 is y - y1 / x - x1
// slope from p2 and p3 is y2 - y1 / x2 - x1
// if these two slopes equal, then p1, p2, p3 lies on same line.

// IF YOU HAVE ANY DOUBTS, FEEL FREE TO ASK
// IF YOU UNDERSTAND, DON'T FORGET TO UPVOTE
/**
 *
 * It is very straight forward. Just compute slope from the first points. If all the points are on the same line, their slope from the first point will be the same. Our point is defined by an array in the formate of [x,y].
 */

var checkStraightLine = function(coordinates) {
  const len = coordinates.length;
  // there are only two points
  if (len === 2) {
    return true
  }

  const x1 = coordinates[0][0],
    y1 = coordinates[0][1],
    x2 = coordinates[1][0],
    y2 = coordinates[1][1],
    k = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < len; i++) {
    let localK = (coordinates[i][1] - y1) / (coordinates[i][0] - x1);
    if (localK !== k) {
      return false
    }
  }

  return true
};

// true case coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
//console.log(checkStraightLine([[1,2],[2,3]]))
//console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));

checkStraightLine([[1,2],[2,3]])
// checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])
// add for coordiantes 2 solution: with tangens and y = ax+ b, JS, Moore's approach (famous voting algorithm) with comments/explanation

// 777
// perfect square
/**
 *
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.
 */
//1 = 1
//4 = 1 + 3
//n^{2}=1+1+2+2+...+(n-1)+(n-1)+n
// 16 = 4^2
//

// 1 even
// let n = 25
// 25 = 5 * 5
// 100 = 10 * 10 = 2*5 * 2*5
// time O(sqrt n) brute force
// 10
var isPerfectSquare = function(num) {
  for (let i = 1; i < num; i++) {
    if ( i*i < num ) i++
    else {
      if (i*i === num) return true
    }
  }

  return false
};

// efficient
// n = 16
// binary search
// complexity
// n = 10^10
// sqrt n = 10 ^ 5
// log sqrt n = 5
var isPerfectSquareBinarySearch = function(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor(left + (right - left)/2);
    let square = mid * mid;

    if (square === num) {
      return true
    }
    else if (square < num) {
      left = mid + 1
    } else {
      right = mid -1
    }
  }
  return false
};


// console.log('isPerfectSquare1', isPerfectSquare(25))
// console.log('isPerfectSquare', isPerfectSquare(24))
// console.log('isPerfectSquareBinarySearch', isPerfectSquareBinarySearch(25))
// console.log('isPerfectSquareBinarySearch', isPerfectSquareBinarySearch(24))

// babolonien method
// The babylonian method to check

// todo move solution from visual code to google doc

export { canConstruct }
