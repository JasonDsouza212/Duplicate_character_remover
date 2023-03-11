import React, {useState } from 'react';
import './index.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [stringToEdit, setStringToEdit] = useState('');
  const [resultString, setResultString] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please provide a non-empty value.');
    } else {
      setStringToEdit(inputValue);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleDeleteChar = (charToDelete) => {
  //   const charArray = stringToEdit.split('');
  //   const filteredArray = charArray.filter((char) => char !== charToDelete);
  //   const newString = filteredArray.join('');
  //   setResultString(newString);
  //   setStringToEdit(newString);
  // };
  const handleDeleteChar = (charToDelete) => {
    let charArray = stringToEdit.split('');
    let i = 0;
    while (i < charArray.length) {
      if (charArray[i] === charToDelete) {
        const startIndex = i;
        let count = 0;
        while (i < charArray.length && charArray[i] === charToDelete) {
          count++;
          i++;
        }
        charArray.splice(startIndex, count);
      } else {
        i++;
      }
    }
    const newString = charArray.join('');
    setResultString(newString);
    setStringToEdit(newString);
  
  };


  const renderString = (stringToRender) => {
    const charCounts = {};
    let maxCount = 1;
    for (const char of stringToRender) {
      if (charCounts[char]) {
        charCounts[char]++;
        maxCount = Math.max(maxCount, charCounts[char]);
      } else {
        charCounts[char] = 1;
      }
    }

    const renderedChars = [];
    for (const char of stringToRender) {
      const count = charCounts[char];
      const color = count > 1 ? `rgb(${255 - (count * 20)}, 255, 255)` : '#fff';
      renderedChars.push(
        <div
          key={`${char}_${count}`}
          className="char-card"
          style={{ backgroundColor: color }}
          onClick={() => count > 1 && handleDeleteChar(char)}
        >
          <span className="char">{char}</span>
          {count > 1 && <span className="delete-icon">X</span>}
        </div>
      );
    }

    return renderedChars;
  };

  const handleGoBack = () => {
    setStringToEdit('');
    setResultString('');
  };

  return (
    <div className="app">
      {stringToEdit ? (
        <div>
          <h1>Duplicate Character Remover</h1>
          <h2>Original String: {stringToEdit}</h2>
          <div className="string-container">{renderString(stringToEdit)}</div>
          {resultString ? (
            <div>
              <h2>Resultant String: {resultString}</h2>
              <h2 className="success-header">Success! No more duplicates.</h2>
            </div>
          ) : (
            <h2>Please click on a character to delete all duplicates.</h2>
          )}
          <button className="back-button" onClick={handleGoBack}>
            Back
          </button>
        </div>
      ) : (
        <form className="input-form" onSubmit={handleSubmit}>
          <h1>Duplicate Character Remover</h1>
          <label htmlFor="input-field">Enter a string:</label>
          <input
            type="text"
            id="input-field"
            name="input-field"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
