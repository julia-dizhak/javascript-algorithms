import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { loopingTriangle } from './tasks/looping-triangle';
import { fizzBuzz } from './tasks/fizz-buzz';

export default function StringManipulation() {
  return (
    <div className="sorting">
      <h2>
        Code Sandbox <br />
        <a href="https://eloquentjavascript.net/">Eloquent JavaScript</a>
      </h2>

      <ul>
        <li>
          <details
            className="details"
            id="eloquent-looping-triangle"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>Looping triangle</strong>
                <p>Write a loop that makes seven calls to console.log to output the triangle</p>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>

              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {loopingTriangle.toString()}
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
      </ul>

  </div>
  );
}
