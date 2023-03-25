import React from 'react';

function OriginalString(props) {
  return (
    <article className="cta">
      <div className="cta__text-column">
        <h2>Original String</h2>
        <a href="##">{props.originalString}</a>
      </div>
    </article>
  );
}

export default OriginalString;