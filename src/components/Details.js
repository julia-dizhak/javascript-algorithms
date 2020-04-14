import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
    code
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
          <div dangerouslySetInnerHTML={createMarkup(complexityDesc)} />
          <p>Runtime is {runTime}</p>
          <p>Space time is {spaceTime}</p>
        </div>

        <SyntaxHighlighter
          language="javascript"
          style={docco}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </details>
  )
}
