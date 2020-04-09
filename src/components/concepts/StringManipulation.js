import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { defineAnagrams } from '../../algo/string-manipulation/define-anagrams';
import { makingAnagrams } from '../../algo/string-manipulation/making-anagrams';
import { alternatingCharacters } from '../../algo/string-manipulation/tasks/alternating-characters';

export default function StringManipulation() {
  return (
    <div className="sorting">
      <h2>String Manipulation</h2>

      <ul>
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
                style={docco}
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
            <summary role="button" aria-controls="content">
              Different tasks related to String Manipulation
            </summary>

            <details
              className="details"
              id="alternating-characters"
              aria-expanded="false"
              aria-labelledby="label">
              <summary role="button" aria-controls="content">
                <span className="question">Alternating characters</span>
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
                  style={dark}
                >
                  {alternatingCharacters.toString()}
                </SyntaxHighlighter>
              </div>
            </details>

            {/* <div aria-hidden="true">
              <h3 className="title">Solution:</h3>

              <pre>sherlock valid string</pre>


            </div> */}
          </details>
        </li>
      </ul>

      <div className="importantInfo">
        There are as well some extra diferent tasks and their solutions
        related to string manipulation
        in folder tasks such as
        <pre>alternatingCharacters</pre>
        <pre>sherlock valid string</pre>
      </div>
  </div>
  );
}
