import React, { useContext } from 'react';
import {MyContext} from '../App'

function OriginalString() {
  const {originalString} = useContext(MyContext)
  return (
    <article className="cta">
      <div className="cta__text-column">
        <h2>Original String</h2>
        <a href="##">{originalString}</a>
      </div>
    </article>
  );
}

export default OriginalString;