import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function createMarkup(markup) {
  return {__html: markup};
}

export default function Details(props) {
  const {
    id,
    question,
    solutionDesc,
    complexityDesc,
    runTime,
    spaceTime,
    code,
    secondCode
  } = props;

  return (
    <details
      className="details"
      id={id}
      aria-expanded="false"
      aria-labelledby="label">
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
        <p>{solutionDesc}</p>
        <div className="complexity">
          {complexityDesc && <div dangerouslySetInnerHTML={createMarkup(complexityDesc)} />}
          {runTime && <p>Runtime is {runTime}</p>}
          {spaceTime &&  <p>Space time is {spaceTime}</p>}
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

      </div>
    </details>
  )
}
