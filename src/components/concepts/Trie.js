import React from 'react';
import Details from '../Details';

// design
import { Trie as DesignTrie } from '../../algorithms/trie/trie';

// problems
import { WordDictionary, Trie as DesignTrie1 } from '../../leetcode/trie/add-search-word';


export default function Trie() {
  return (
    <div className="trie">
      <h2>Trees</h2>

      <ul id="trie">
        <li>
          <Details
            id="test-trie"
            question=""
            code={WordDictionary.toString()}
            secondCode={DesignTrie1.toString()}
          />
        </li>

        <li>
          <Details
            id="trie-implementation"
            question="Trie implementation"
            solution=""
            complexity=""
            time=""
            space=""
            code={DesignTrie.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
