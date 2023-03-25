import React, { useContext } from 'react';
import {MyContext} from '../App'
import OriginalString from '../components/originalString';
import ResultantString from '../components/resultatntstring';

function Screen2() {
    const {renderString, stringToEdit ,resultString ,handleGoBack } = useContext(MyContext)
  return (
    <div>
    <h1 class="large">Duplicate Character Remover</h1>
    <div className='middle'>
    <OriginalString />
        <div className="string-container">{renderString(stringToEdit)}</div>
            {resultString && (
                <div>
                    <ResultantString />
                </div>
            )}
            <button className="back-button btn" onClick={handleGoBack}>
                Back
            </button>
        </div>
  </div>
  );
}

export default Screen2;