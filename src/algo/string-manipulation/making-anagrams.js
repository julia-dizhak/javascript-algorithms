/**
 * Given two strings, a and b, that may or may not be of the same length,
 * determine the minimum number of character deletions required to make a and b anagrams.
 * Any characters can be deleted from either of the strings.
 * For example, if a = cde and b = dcf, we can delete e from string a and
 * f from string b so that both remaining strings are  and  which are anagrams.
 */
function makingAnagrams(str1, str2) {
  const len1 = str1.length
  const len2 = str2.length;
  const obj1 = {};
  const obj2 = {};

  for (let i=0; i < len1; i++) {
    obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1
  }

  for (let j=0; j < len2; j++) {
    obj2[str2[j]] = obj2[str2[j]] ? obj2[str2[j]] + 1 : 1
  }

  for (let i =0; i<len1; i++) {
    if (obj2.hasOwnProperty(str1[i])) {
      obj2[str1[i]]--;
      if (obj2[str1[i]] === 0) {
        delete obj2[str1[i]]
      }
    }
  }

  for (let j=0; j< len2; j++) {
    if (obj1.hasOwnProperty(str2[j])) {
      obj1[str2[j]]--;
      if (obj1[str2[j]] === 0) {
        delete obj1[str2[j]];
      }
    }
  }

  const arr1 = Object.values(obj1);
  const arr2 = Object.values(obj2);
  debugger;
  const sum1 = ((arr1.length > 0) && arr1.reduce((a,b) => a + b)) || 0;
  const sum2 = ((arr2.length > 0) && arr2.reduce((a,b) => a+b)) || 0;
  const sum = sum1 + sum2;

  return sum;
}

export { makingAnagrams }
