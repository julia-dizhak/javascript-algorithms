/*
Goat Latin


Example 1:
Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:

Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"


Notes:

S contains only uppercase, lowercase and spaces. Exactly one space between each
word.
1 <= S.length <= 150.
*/

/**
 * @param {string} S
 * @return {string}
 */
// var toGoatLatin = function(S) {
//   // S < 1

//   const n = S.length;
//   let chars = S.split('');
//   //S.split(' ')
//   //debugger

//   //let left = 0;
//   let lastIndex = n - 1;
//   // i iteration pointer
//   let i = 0;
//   //
//   let start = 0;
//   let end = 0;
//   let index = 0;

//   while (i < lastIndex) {
//     debugger
//     start = i;
//     while (chars[i] !== ' ') {
//       i++;
//     }
//     end = i;
//     transform(chars, start, end);
//     // reset
//     i = end + 1;
//     //end =

//     // move to the next
//     i++
//   }
// };

// function transform(arr, i, j) {
//   debugger
//   if (isVowel(arr[0])) {

//   }

// }

var toGoatLatin = function(S) {
  const n = S.length;
  let words = S.split(' ');
  const ma = "ma";

  let index = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    index++;
    //debugger
    if (isVowel(word[0])) {
      word += ma;
      //return word
    } else {
      word = word.slice(1) + word[0] + ma;
    }
    words[i] = word + 'a'.repeat(index);

  }

  return words.join(' ');
}

// todo separate transformation function

function isVowel(x) {
  return /[aeiouAEIOU]/.test(x);
}

console.log('toGoatLatin', toGoatLatin('I'))
console.log('toGoatLatin', toGoatLatin('I speak Goat Latin'))
console.log('toGoatLatin', toGoatLatin('The quick brown fox jumped over the lazy dog'))

export {
  toGoatLatin
}
