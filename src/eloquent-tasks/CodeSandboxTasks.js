import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { loopingTriangle } from './tasks/looping-triangle';

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
                <strong>Write a loop that makes seven calls to console.log to output the triangle</strong>
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
      </ul>

  </div>
  );
}
