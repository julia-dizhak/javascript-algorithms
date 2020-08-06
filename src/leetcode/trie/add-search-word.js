/*
Leetcode
Add and Search Word - Design DS

Design a data structure that supports the following two operations:
void addWord(word)
bool search(word)

search(word) can search a literal word or a regular expression string containing
only letters a-z or .. A . means it can represent any one letter.

Example:
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

Note:
You may assume that all words are consist of lowercase letters a-z.

Hint #1
You should be familiar with how a Trie works. If not, please work on this problem:
Implement Trie (Prefix Tree) first.
*/

// https://leetcode.com/problems/add-and-search-word-data-structure-design/discuss/59669/Java-Solution-easy-understand
/*
Approach
*/
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

// I think best case is O(n) (straight search down tree), worst case is O(26^m * n) where n is the length of the search term and m is the number of "." characters that appear in the search term.
// WordDictionary.prototype.search = function(word) {
//   var search = function(current, level) {
//       // Cannot search for the word
//       if (!current || (level === word.length && !current.isEnd)) {
//           return false;
//       }

//       if (level === word.length && current.isEnd) {
//           return true;
//       }

//       if (word[level] === '.') {
//           for (let i = 0; i < 26; i++) {
//               var ch = String.fromCharCode(97 + i);

//               if (search(current.children[ch], level + 1)) {
//                   return true;
//               }
//           }

//           return false;
//       }

//       return search(current.children[word[level]], level + 1);
//   };

//   return search(this.root, 0);
// };


class WordDictionary {
  /**
   * Initialize your data structure here.
  */
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Adds a word into the data structure.
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    //debugger
    let cur = this.root;

    for (let i = 0; i < word.length; i++) {
      if ( !(word[i] in cur.children) ) {
        cur.children[word[i]] = new TrieNode()
      }
      cur = cur.children[word[i]];
    }

    cur.isEnd = true
  }

  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const len = word.length;

    const match = function(cur, level) {
      if ( !cur || (level === len && !cur.isEnd) ) {
        return false
      }

      if (level === len && cur.isEnd) {
        return true
      }

      if (word[level] === '.') {

      }

    }

    return match(this.root, 0);
  }

};

// tests
let trie1 = new WordDictionary();
trie1.addWord('bad');
trie1.addWord('dad');
// trie.add('good');
// trie.add('glad');
// trie.add('gold');

// trie.add('apple');
// trie.add('app');
// trie.add('abide');
// trie.add('ball');
// trie.add('bat');
//trie = JSON.parse(JSON.stringify(trie)).head;
//console.log('trie', trie)

export {
  Trie,
  WordDictionary
}
