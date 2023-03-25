import React from 'react';
import OriginalString from '../components/originalString';
import ResultantString from '../components/resultatntstring';

function Screen2(props) {
  return (
    <div>
    <h1 class="large">Duplicate Character Remover</h1>
    <div className='middle'>
    <OriginalString originalString={props.originalString}/>
        <div className="string-container">{props.renderString(props.stringToEdit)}</div>
            {props.resultString && (
                <div>
                    <ResultantString resultString={props.resultString} />
                </div>
            )}
            <button className="back-button btn" onClick={props.goback}>
                Back
            </button>
        </div>
  </div>
  );
}

export default Screen2;