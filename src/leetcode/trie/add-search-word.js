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

class Node {
  constructor(key) {
    // the "key" value will be the character in sequence
    this.key = (key === undefined) ? null : key;
    this.value = (key.length === 0) ? null : undefined; // ?
    this.children = [];
  }
}

class Trie {
  constructor() {
    // head or root
    this.head = {
      key: '',
      children: {}
    }
  }

  /*
    insert a word
    to insert an element into the trie, simply build the correct path from the
    root to the leaf
  */
  add(word) {
    let curNode = this.head,
      curChar = word.slice(0,1),
      newNode = null;

    // decrease a word for one character
    word = word.slice(1);

    //debugger
    // looks for an appropriate place to insert an element and
    // !== null
    while (typeof curNode.children[curChar] !== 'undefined' &&
    curChar.length > 0
    ) {
      //debugger
      curNode = curNode.children[curChar];
      curChar = word.slice(0,1);
      word = word.slice(1);
    }

    // iterates through the remaining characters of the string, filling out the trie
    while (curChar.length > 0) {
      newNode = new Node(curChar);
      curNode.children[curChar] = newNode;
      curNode = newNode;
      curChar = word.slice(0,1);
      word = word.slice(1);
    }
  }
}

// tests
let trie = new Trie();
// trie.add('good');
// trie.add('glad');
// trie.add('gold');

trie.add('apple');
trie.add('app');
trie.add('abide');
trie.add('ball');
trie.add('bat');
//trie = JSON.parse(JSON.stringify(trie)).head;
console.log('trie', trie)


class WordDictionary {
  /**
   * Initialize your data structure here.
  */
  constructor() {

  }

  /**
   * Adds a word into the data structure.
   * @param {string} word
   * @return {void}
   */
  addWord(word) {

  }

};

export {
  Trie,
  WordDictionary
}
