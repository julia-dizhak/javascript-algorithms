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
    spaceComplexity,
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
        <p className="solutionDesc">{solutionDesc}</p>
        <div className="complexity">
          {/* {complexityDesc && <div dangerouslySetInnerHTML={createMarkup(complexityDesc)} />} */}
          {complexityDesc && <div className="complexityDesc">{complexityDesc}</div> }
          {runTime && <p className="runtime">runtime is {runTime}</p>}
          {spaceComplexity && <p>space complexity is {spaceComplexity}</p>}
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
