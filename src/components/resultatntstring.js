import React from 'react';

function ResultantString(props) {
  return (
    <article className="cta">
      <div className="cta__text-column">
        <h2>Original String</h2>
        <a href="##">{props.resultString}</a>
      </div>
    </article>
  );
}

export default ResultantString;