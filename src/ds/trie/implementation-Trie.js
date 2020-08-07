/*
Trie DS (Prefix Tree)

Implement a trie with insert, search, and remove methods.

Example:
Trie trie = new Trie();

trie.insert("bad");
trie.insert("ball");
trie.search("bad");   // returns true
trie.search("ba");    // returns false


Note:
You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/

/*
Approach:

class Node = {
  key: key,
  val: null,
  children: []
}

class Trie {
  this.head = {
    key: '',
    children: {}
  }
}

time:
insert
search
remove

*/
class TrieNode {
  constructor(key) {
    // the "key" value will be the character in sequence
    this.key = (key === undefined) ? null : key;
    this.val = null; // need to think about this solution is not obvius better to use boolen Endword
    this.children = [];
  }
}

class Trie {
  constructor() {
    // head or root
    this.head = {
      key: '',
      children: {},
      // end of word boolean
    }
  }

  /*
    insert a word
    to insert an element into the trie, simply build the correct path from the
    root to the leaf
  */
  insert(word) {
    let curNode = this.head,
      curChar = word.slice(0,1),
      newNode = null;

      // decrease a word for one character
    word = word.slice(1);

    // looks for an appropriate place to insert an element and
    // !== null
    while (typeof curNode.children[curChar] !== 'undefined' &&
      curChar.length > 0) {
        curNode = curNode.children[curChar]; // update this.head. object is reference type
        curChar = word.slice(0,1);
        word = word.slice(1)
    }

    // iterates through the remaining characters of the string, filling out the trie
    while (curChar.length > 0) {
      //newNode = new TrieNode(curChar);
      newNode = {
        key: curChar,
        val: word.length === 0 ? null : undefined,
        children : {}
		  };
      curNode.children[curChar] = newNode; // update this.head. object is reference type
      curNode = newNode;
      curChar = word.slice(0,1);
      word = word.slice(1);
    }
  }

  // The search method returns the depth of the given key or -1 if it does not
  // find any.
  search(word) {
    //debugger
    let curNode = this.head,
      curChar = word.slice(0,1),
      d = 0;

    word = word.slice(1);

    while (typeof curNode.children[curChar] !== "undefined" &&
      curChar.length > 0
    ) {
      curNode = curNode.children[curChar];
      curChar = word.slice(0,1);
      word = word.slice(1);
      d += 1;
    }

    if (curNode.val === null && word.length === 0) {
      console.log('d', d)
      return true
    } else return false
  }

  /*
  If the string in question is present in the trie, the remove method recurses
  down to the node that represents the last character of the string and removes
  nodes associated with the characters in the string only if they have no sub
  nodes dependent on them.
  */
  remove(word) {

  }
}

// one good example https://johnresig.com/blog/javascript-trie-performance-analysis/#:~:text=A%20Trie%20is%20a%20relatively,prefixes%20in%20words%20quite%20easily.
// check remove as well https://medium.com/@alexanderv/tries-javascript-simple-implementation-e2a4e54e4330
// todo
// // need to think about this solution is not obvius better to use boolen Endword
// left a comment

let trie = new Trie();
trie.insert('bad');
trie.search('bad');
// trie.insert('ball');
// trie.insert('dad');
//trie.add('mad');
//trie = JSON.parse(JSON.stringify(trie)).head;
console.log('trie', trie)

export {
  Trie
}
