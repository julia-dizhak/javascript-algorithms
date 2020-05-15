/**
 * 208 Implement Trie (Prefix Tree
 *
 * Insert
Search
startsWith method

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
 *
 * just a refernces to other nodes
*/

class TrieNode1 {
  constructor(key) {
    // the "key" value will be the character in sequence
    this.key = key;

    // its possible
    // this.keys = new Map()


    // we keep a reference to parent
    this.parent = null;

    // we have hash of children
    this.children = {};

    // check to see if the node is at the end
    this.end = false;
  }
}

class Trie1 {
  constructor() {
    // start point
    this.root = new TrieNode1(null);
  }

  // inserts a word into the trie.
// time complexity: O(k), k = word length
  // add word
  insert(word) {
    // we start at the root 😬
    var node = this.root;

    // todo check if it's null case

    // for every character in the word
    for (let i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if ( !node.children[word[i]] ) {
        // if it doesn't exist, we then create it.
        node.children[word[i]] = new TrieNode1(word[i]);

        // we also assign the parent to the child node.
        node.children[word[i]].parent = node;
        debugger
      }

      // proceed to the next depth in the trie.
      node = node.children[word[i]];

      // finally, we check to see if it's the last word.
      if (i === word.length-1) {
        // if it is, we set the end flag to true.
        node.end = true;
      }

    }
  }

  // lookup
}

// const trie = new Trie1();
// //trie.insert('apple')
// trie.insert('ap')
// console.log(trie)

// class Trie {
//   constructor() {
//     this.root = {}
//   }

//   insert(word) {
//     let node = this.root;
//     for (const c of word) {
//       if (node[c] == null) node[c] = {};
//       node = node[c]
//     }
//     node.isWord = true
//   }

//   traverse(word) {
//     let node = this.root;
//     for (const c of word) {
//       node = node[c];
//       if (node == null) return null
//     }
//     return node
//   }

//   search(word) {
//     const node = this.traverse(word);
//     return node != null && node.isWord === true;
//   }

//   startsWith(prefix) {
//     return this.traverse(prefix) != null;
//   }
// }

// const trie = new Trie();
// trie.insert('ap');
// console.log(trie)


/**
 * The Idea
Store the entire trie in an object
Each node is an object that uses character as keys to connect to other characters
Set isEnd to true for the last character node in a word
 */
var Trie = function() {
  this.root = {};
};

/**
* Inserts a word into the trie.
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (const c of word) {
    if (node[c] == null) node[c] = {};
    node = node[c]
  }
  node.isWord = true
};

Trie.prototype.traverse = function(word) {
  let node = this.root;
  for (const c of word) {
    node = node[c];
    if (node == null) return null
  }
  return node
}

Trie.prototype.search = function(word) {
  const node = this.traverse(word);
  return node != null && node.isWord === true;
}

Trie.prototype.startsWith = function(prefix) {
  return this.traverse(prefix) != null;
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
export { Trie }
