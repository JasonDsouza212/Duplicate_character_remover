import React, {useState } from 'react';
import './index.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [stringToEdit, setStringToEdit] = useState('');
  const [resultString, setResultString] = useState('');
  const [originalString, setOriginalString] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please provide a non-empty value.');
    } else {
      setStringToEdit(inputValue);
      setOriginalString(inputValue);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteChar = (charToDelete,index) => {
    // const charArray = stringToEdit.split('');
    // const filteredArray = charArray.filter((char) => char !== charToDelete);
    // const newString = filteredArray.join('');
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
  // const handleDeleteChar = (charToDelete,index) => {
  //   let charArray = stringToEdit.split('');
  //   let i = 0;
  //   while (i < charArray.length) {
  //     if (charArray[i] === charToDelete && i!==index) {
  //       const startIndex = i;
  //       let count = 0;
  //       while (i < charArray.length && charArray[i] === charToDelete && i!==index) {
  //         count++;
  //         i++;
  //       }
        
  //       charArray.splice(startIndex, count);
  //     } else {
  //       i++;
  //     }
  //   }
  //   const newString = charArray.join('');
  //   setResultString(newString);
  //   setStringToEdit(newString);
  
  // };


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
    // let ind=0;
    
    for (let ind=0;ind<stringToRender.length;ind++) {
      console.log(ind+""+stringToRender[ind])
      const count = charCounts[stringToRender[ind]];
      const color = count > 1 ? `rgb(${255 - (count * 20)}, 255, 255)` : '#fff';
      renderedChars.push(
        <div
          key={ind}
          className="char-card"
          style={{ backgroundColor: color }}
          onClick={() => count > 1 && handleDeleteChar(stringToRender[ind],ind)}
        >
          <span className="char">{stringToRender[ind]}</span>
          {count > 1 && <span className="delete-icon">X</span>}
        </div>
      );
      // ind=ind+1;
    }

    return renderedChars;
  };

  const handleGoBack = () => {
    setStringToEdit('');
    setResultString('');
    setOriginalString('');
  };

  return (
    <div className="app">
      {stringToEdit ? (
        <div>
          <h1>Duplicate Character Remover</h1>
          <h2>Original String: {originalString}</h2>
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
