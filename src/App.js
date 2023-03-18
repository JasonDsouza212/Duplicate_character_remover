import React, {useState } from 'react';
import './index.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [stringToEdit, setStringToEdit] = useState('');
  const [resultString, setResultString] = useState('');
  const [originalString, setOriginalString] = useState('');

// To submit the input and save
const handleSubmit = (event) => {
  event.preventDefault();
  if (inputValue.trim() === '') {
    alert('Please provide a non-empty value.');
  } else {
    setStringToEdit(inputValue.replace(/\s+/g, ' ').trim().toUpperCase());
    setOriginalString(inputValue.replace(/\s+/g, ' ').trim().toUpperCase());
    setInputValue('');
  }
};

// To save the input value in inputValue
const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

// This function deletes the same character,
const handleDeleteChar = (charToDelete,index) => {
  console.log(index+" this is the index")
      let ans="";
      for(let i=0;i<stringToEdit.length;i++){
          if(stringToEdit[i]!==charToDelete || i===index){
              ans=ans+stringToEdit[i];
          }
          
      }
  setResultString(ans);
  setStringToEdit(ans);
};
 
// The card is designed here
const renderString = (stringToRender) => {
  stringToRender = stringToRender.replace(/\s+/g, ' ').trim()
  const charCounts = {};
  for (const char of stringToRender) {
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  const renderedChars = [];
  let success = true;
  
  for (let ind=0;ind<stringToRender.length;ind++) {   
    const count = charCounts[stringToRender[ind]];
    const color = count > 1 && stringToRender[ind]!==" " ? `rgb(${255 - (count * 20)}, 255, 255)` : '#fff';
    renderedChars.push(
      <div
        key={ind}
        className="char-card"
        style={{ backgroundColor: color }}
        onClick={() => count > 1 && stringToRender[ind]!==" " && handleDeleteChar(stringToRender[ind],ind)}
      >
        <span className="char">{stringToRender[ind]}</span>
        {count > 1 && stringToRender[ind]!==" " && <span className="delete-icon">X</span>}
      </div>
    );
    if (count > 1 && stringToRender[ind]!==" ") {
      success = false;
    }
  }

  return (
    <div className="render-container">
      <div className="string-container">{renderedChars}</div> 
      {success ? ( 
        <h2 className="success-header">Success! No more duplicates.</h2>
      ) : (
        <h2 className="edit-header">click on a character to delete all of its duplicates, as there are some characters that are repeating</h2>
      )}
    </div>
  );
};

// sets all values to empty 
  const handleGoBack = () => {
    setStringToEdit('');
    setResultString('');
    setOriginalString('');
  };

  return (
    <div className="app">
      {stringToEdit ? (
        <div>
          <h1 class="large rise">Duplicate Character Remover</h1>
          <div className='middle'>
            <article class="cta">
              <div class="cta__text-column">
                <h2>Original String </h2>
                <a href="##">{originalString}</a>
              </div>
            </article>
            <div className="string-container">{renderString(stringToEdit)}</div>
            {resultString && (
            <div>
              <article class="cta">
                <div class="cta__text-column">
                  <h2>Resultant String</h2>
                  <a href="##">{resultString}</a>
                </div>
              </article>
            </div>
            )}
            <button className="back-button btn" onClick={handleGoBack}>
              Back
            </button>
          </div>
        </div>
      ) : (
        <form className="input-form" onSubmit={handleSubmit}>
          <h1 class="large rise">Duplicate Character Remover</h1>
          <label htmlFor="input-field" className='input-title'>Enter a string:</label>
          <input
            type="text"
            id="input-field"
            name="input-field"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-button btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
