import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Details from './../Details';

// problems
import { reverseVariant2, reverseStringTwoPointersUseTemp, reverseStringRecursion } from '../../ds/string-manipulation/reverse-a-string';
//import { reverseWords } from '../../leetcode/string-manipulation/151-reverse-words';
import { defineAnagrams } from '../../ds/string-manipulation/define-anagrams';
import { makingAnagrams } from '../../ds/string-manipulation/making-anagrams';
import { alternatingCharacters } from '../../ds/string-manipulation/tasks/alternating-characters';
import { isValid } from '../../ds/string-manipulation/tasks/sherlock-valid-string';
import { numJewelsInStones, numJewelsInStonesBruteForce } from '../../leetcode/string-manipulation/771-number-jewels-in-stones';
import { firstUniqueChar } from '../../leetcode/string-manipulation/387-first-unique-character-in-string';
import { findAnagramsUseTwoHash } from '../../leetcode/string-manipulation/438-find-all-anagrams';
//import { detectCapitalUse } from '../../leetcode/string-manipulation/520-detect-capital';
import { toGoatLatin } from '../../leetcode/string-manipulation/goat-latin';

import { getPermutation } from '../../leetcode/backtracking/60-permutation-sequence';
//import { permute } from '../../leetcode/backtracking/46-print-all-permutations';
//import { longestPalindromeUseHash, longestPalindromeUseGreedy } from '../../leetcode/string-manipulation/palindrome/406-longest-palindrome';
import { checkStraightLine } from '../../leetcode/string-manipulation/383-ransom-note';
import { checkInclusion } from '../../leetcode/string-manipulation/567-permutation-in-string';

export default function StringManipulation() {
  return (
    <div className="sorting">
      <h2>String Manipulation</h2>

      <ul>
        <li>
          <Details
            id="test1"
            question="test case"
            code={longestPalindromeUseGreedy.toString()}
            //secondCode={detectCapitalUse.toString()}
          />
        </li>

        <li>
          <Details
            id="reverse-a-string"
            question="Write a function that reverses a string: approach swap, recursion, two pointers"
            time="Time is O(n) for all approaches"
            space="two pointers space is O(1), recursion is O(n)"
            code={reverseVariant2.toString()}
            secondCode={reverseStringTwoPointersUseTemp.toString()}
            thirdSolution={reverseStringRecursion.toString()}
          />
        </li>

        <li>
          <details
            className="details"
            id="define-anagrams"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>define anagrams</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <p>
                Anagrams are 2 words meaning anagrams with the same characters but in different order
                (same exact characters but order doesn’t matter).
              </p>
              <ul className="unorderedList">
                <li>Define hash</li>
                <li>Increase the count for the first string.</li>
                <li>Decrease the count for the second string. If a letter in string 2 is not found in the hash then return false.</li>
                <li>else return true</li>
              </ul>

              <SyntaxHighlighter
                language="javascript"
                style={dark}
              >
                {defineAnagrams.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
        </li>

        <li>
          <details
            className="details"
            id="making-anagrams"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>making anagrams</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <p>
                Given two strings, a and b, that may or may not be of the same length,
                determine the minimum number of character deletions required to make a and b anagrams.
                Any characters can be deleted from either of the strings.
              </p>

              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {makingAnagrams.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
        </li>

        <li>
          <details
            className="details"
            id="string-manipulation-tasks"
            aria-expanded="false"
            aria-labelledby="label">
              <summary role="button" aria-controls="content">Different tasks related to String Manipulation</summary>
              <Details
                id="alternating-characters"
                question="Alternating characters"
                solution={`
                  Given two strings, a and b, that may or may not be of the same length,
                  determine the minimum number of character deletions required to make a and b anagrams.
                  Any characters can be deleted from either of the strings.
                `}
                code={alternatingCharacters.toString()}
              />

              <Details
                id="sherlock-valid-string"
                question="Sherlock valid string"
                solution={`
                  Sherlock considers a string to be valid if all characters of the string
                  appear the same number of times and one symbol could be deleted.
                `}
                code={isValid.toString()}
              />

              <Details
                id="numJewelsInStones"
                question="Number Jewels in stones"
                code={numJewelsInStones.toString()}
                secondCode={numJewelsInStonesBruteForce.toString()}
              />

              <Details
                id="firstUniqueChar"
                question="First Unique Character in a String"
                complexity={`
                  The best possible solution here could be of a linear time
                  because to ensure that the character is unique you have to check the whole string anyway.
                `}
                time="O(n)"
                space="O(n)"
                code={firstUniqueChar.toString()}
              />

              <Details
                id="find-all-anagrams"
                question="Find all anagrams in a String: approach sliding window and 2 counter Hashes"
                solution={`
                  Given a string s and a non-empty string p,
                  find all the start indices of p's anagrams in s.
                `}
                time="O(N_s + N_p) since it's one pass along both strings"
                space="O(1) (or O(n)), because pCount and sCount contain 26 elements each"
                code={findAnagramsUseTwoHash.toString()}
              />
          </details>
        </li>
      </ul>
  </div>
  );
}
