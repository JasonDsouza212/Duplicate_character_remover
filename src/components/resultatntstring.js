import React, { useContext } from 'react';
import {MyContext} from '../App'

function ResultantString() {
  const {resultString} = useContext(MyContext)
  return (
    <article className="cta">
      <div className="cta__text-column">
        <h2>Original String</h2>
        <a href="##">{resultString}</a>
      </div>
    </article>
  );
}

export default ResultantString;