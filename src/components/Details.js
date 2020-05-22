import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// function createMarkup(markup) {
//   return {__html: markup};
// }

export default function Details(props) {
  const {
    id,
    question,
    solution,
    complexity,
    time,
    omega,
    space,
    code,
    secondCode,
    thirdSolution
  } = props;

  return (
    <details
      className="details"
      id={id}
      aria-expanded="false">
      <summary
        role="button"
        aria-controls="content"
      >
        <span className="question">
          Question:&nbsp;
          <strong>{question}</strong>
        </span>
      </summary>

      <div aria-hidden="true">
        <h3 className="title">Solution:</h3>
        <p className="solutionDesc">{solution}</p>
        <div className="complexity">
          {/* {complexityDesc && <div dangerouslySetInnerHTML={createMarkup(complexityDesc)} />} */}
          {complexity && <div className="complexityDesc">{complexity}</div> }
          {time && <p className="runtime">Time is {time}</p>}
          {omega && <p className="runtime">Best time is {omega}</p>}
          {space && <p>Space is {space}</p>}
        </div>

        {code &&
          <SyntaxHighlighter
            language="javascript"
            style={docco}
          >
            {code}
          </SyntaxHighlighter>
        }

        {secondCode &&
          <SyntaxHighlighter
            language="javascript"
            style={dark}
          >
            {secondCode}
          </SyntaxHighlighter>
        }

        {thirdSolution &&
          <SyntaxHighlighter
            language="javascript"
            style={docco}
          >
            {thirdSolution}
          </SyntaxHighlighter>
        }

      </div>
    </details>
  )
}
