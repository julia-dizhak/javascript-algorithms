/*
Leetcode
389 Find the difference
easy

Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter 
at a random position.

Find the letter that was added in t.

Example:
Input: s = "abcd" t = "abcde"
Output: e
Explanation: 'e' is the letter that was added.
*/


/*
Approach Use method charCodeAt()

Useful methods charAt(index), charCodeAt(index)
charAt(index)
The String object's String.prototype.charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 0; // index  = 4 return ‘q’
console.log(`The character at index ${index} is ${sentence.charAt(index)}`); // T

charCodeAt(index)
The String.prototype.charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
“A”.charAtCode(0) = 65     “a”.charAtCode(0) = 97
“B”.charAtCode(0) = 66     “b”.charAtCode(0) = 98
....
“X”.charAtCode(0) = 88
...
“Z”.charAtCode(0) = 90
If char = ‘A’, than char.charAtCode(i) - “A”.charAtCode(0) = 65 - 65 = 0 (98 - 97 for lowercase)
If char = ‘B’, than char.charAtCode(i) - “A”.charAtCode(0) = 66 - 65 = 1
...
If char = ‘X’, than char.charAtCode(i) - “A”.charAtCode(0) = 88 - 65 = 23
...
If char = ‘Z’, than char.charAtCode(i) - “A”.charAtCode(0) = 90 - 65 = 25

time is O(n)
space is O(1)
*/

/*
Approach Hashmap

in this approach we will store the frequency of each character of our S string 
in hashmap and then iterate over our T string and then check whether the ith 
character has frequency greater than 0 in the hashmap or not.

time is O(n)
space is O(n)
*/
var findTheDifferenceUseHash = function(s, t) {
  if (s.length === 0) return t;

  let hash = {};
  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }
  //console.log('hash', hash);
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]] === undefined) return t[i];
    if (hash[t[i]] !== undefined && hash[t[i]] === 0) return t[i];
    hash[t[i]]--;
  }
  
  return '';
}

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
*/
var findTheDifference = function(s, t) {
  if (s.length === 0) return t;
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  
  //console.log('s', s.split('').map(char => char.charCodeAt(0) - 'a'.charCodeAt(0)));
  const sSum = s
    .split('')
    .map(letter => letter.charCodeAt(0) - 'a'.charCodeAt(0))
    .reduce((a,b) => a + b);

  const tSum = t
    .split('')
    .map(letter => letter.charCodeAt(0) - 'a'.charCodeAt(0))
    .reduce((a,b) => a + b);
    console.log('sSum', sSum);
    console.log('tSum', tSum);
  
  return letters[tSum - sSum];
}

/*
Approach XOR

a ^ a ^ b ^ b ^c ^c ^c will give 
Check single number problem, see example below
time is O(n)
space is O(1)
*/
var singleNumber = function(nums) {
  let res = 0;
  for (const num of nums) {
    res = res ^ num;
  }
  return res;
}
// console.log('singleNumber', singleNumber([2,2,1]));
// console.log('singleNumber', singleNumber([4,1,2,1,2]));

var findTheDifference1 = function(s, t) {
  let c = t.charCodeAt(t.length - 1);
  //console.log('c', c);

  for (let i = 0; i < s.length; i++) {
    c ^= s.charCodeAt(i);
    c ^= t.charCodeAt(i);
  }
  //console.log('c', c);
  return String.fromCharCode(c);
}

// tests
//console.log('findTheDifference', findTheDifferenceUseHash('abcd', 'abcde'))
//console.log('find', findTheDifference('abcdx', 'abcdex'));
//console.log('find', findTheDifferenceUseHash('a', 'aa'));
// console.log('find', findTheDifference('abacabac', 'abacaback'));
// console.log('find', findTheDifference('a', 'ab'));
// console.log('find', findTheDifference('b', 'bb'));
// let testStr = 'ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor';
// let q = "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj";
//console.log('find', findTheDifference('aklfg', 'albkgf'));
// console.log('find', findTheDifference(testStr, q));

export {
  findTheDifference,
  findTheDifference1,
  findTheDifferenceUseHash
}