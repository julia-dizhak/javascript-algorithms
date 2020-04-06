import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { makingAnagrams } from '../../algo/string-manipulation/making-anagrams';

export default function StringManipulation() {
  return (
    <div className="sorting">
      <h2>String Manipulation</h2>

      <ul>
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
                style={docco}
              >
                {makingAnagrams.toString()}
              </SyntaxHighlighter>
              <p>

              </p>
            </div>
          </details>
        </li>
      </ul>
  </div>
  );
}
