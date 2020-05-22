import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Details from '../components/Details';
import { loopingTriangle } from './tasks/looping-triangle';
import { fizzBuzz } from './tasks/fizz-buzz';
import { chessboard } from './tasks/chessboard';
import { isEven } from './tasks/3-chapter-functions/is-even';
import { reverseArray, reverseArrayInPlace, reverseUseRecursion } from './tasks/4-chapter-data-structures/reverse-array';

export default function StringManipulation() {
  return (
    <div className="sorting">
      <h2>
        Code Sandbox <br />
        <a href="https://eloquentjavascript.net/">Eloquent JavaScript</a>
      </h2>

      <ul>
        <li>
          <Details
            id="eloquent-looping-triangle"
            question="Looping triangle"
            solution="Write a loop that makes seven calls to console.log to output the triangle"
            code={loopingTriangle.toString()}
          />
        </li>

        <li>
          <details
            className="details"
            id="eloquent-fizz-buzz"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>
                  fizzbuzz
                </strong>
                <p>
                  Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
                  "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
                </p>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <span className="complexity">
                runtime - O(n)
              </span>

              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {fizzBuzz.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
        </li>

        <li>
          <details
            className="details"
            id="eloquent-fizz-buzz"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>
                  Chessboard
                </strong>
                <p>
                  Write a program that creates a string that represents an 8×8 grid, using newline characters
                  to separate lines. At each position of the grid there is either a space or a "#" character.
                  The characters should form a chessboard.
                </p>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <span className="complexity">complexity - n2</span>
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                { chessboard.toString() }
              </SyntaxHighlighter>
            </div>
          </details>
        </li>

        <li>
          <Details
            id="eloquent-is-even"
            question="Define whether a positive whole number is even or odd (using recursion): Zero is even, One is odd, for any other number N, its evenness is the same as N - 2."
            code={isEven.toString()}
          />
        </li>

        {/* chapter 4 */}
        <li>
          <Details
            id="eloquent-4-reverse-array"
            question="Reverse an array"
            solution=""
            code={reverseArray.toString()}
            secondCode={reverseArrayInPlace.toString()}
            thirdSolution={reverseUseRecursion.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
