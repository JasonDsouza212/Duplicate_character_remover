import React, {useState ,createContext } from 'react';
import Inputform from './components/inputform';
import Screen2 from './components/screen2';
import './css/index.css';

const MyContext = createContext();
function App() {
  const [inputValue, setInputValue] = useState('');
  const [stringToEdit, setStringToEdit] = useState('');
  const [resultString, setResultString] = useState('');
  const [originalString, setOriginalString] = useState('');
  const alphabetColors = {
    A: '#FF6B6B',
    B: '#6BFF6B',
    C: '#6B6BFF',
    D: '#9FDFFF',
    E: '#FF6BFF',
    F: '#6BFFFF',
    G: '#FFC966',
    H: '#B266B2',
    I: '#FFD1DC',
    J: '#FF9B8E',
    K: '#66B2B2',
    L: '#FFDF66',
    M: '#E57F9F',
    N: '#8FFFC1',
    O: '#C1FF8F',
    P: '#EBC1FF',
    Q: '#FFA0C2',
    R: '#66DFFF',
    S: '#FF66AA',
    T: '#66D1D1',
    U: '#B266E5',
    V: '#8F8FFF',
    W: '#66B266',
    X: '#FFE8CA',
    Y: '#66A3FF',
    Z: '#6BFFA5',
    '0': '#FFCC99',
    '1': '#CCCCFF',
    '2': '#FF99CC',
    '3': '#99FFCC',
    '4': '#CC99FF',
    '5': '#FFCC66',
    '6': '#99CCFF',
    '7': '#FF66CC',
    '8': '#CCFF99',
    '9': '#FF9999',
    '`': '#D9D9D9',
    '-': '#C0C0C0',
    '=': '#BFBFBF',
    '[': '#A9A123',
    ']': '#A9A321',
    '\\':'#A9A856',
    ';': '#A67892',
    '\'':'#A92782',
    ',': '#A99267',
    '.': '#A91542',
    '/': '#A97829',
    '~': '#A9A9A0',
    '!': '#FFB6C1',
    '@': '#FFD700',
    '#': '#FF8C00',
    '$': '#FF00FF',
    '%': '#8B0000',
    '^': '#00FF00',
    '&': '#00BFFF',
    '*': '#DAA520',
    '(': '#FF1493',
    ')': '#FFA07A',
    '_': '#A9A675',
    '+': '#FFDAB9',
    '{': '#A9A9A8',
    '}': '#A9A777',
    '|': '#A9A888',
    ':': '#A9A999',
    '"': '#A9A900',
    '<': '#A9A111',
    '>': '#A9A222',
    '?': '#A9A333',
    ' ': '#FFFFFF',
  };

  
  

  
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
const handleDeleteChar = (charToDelete,index,stringtodel) => {
      let ans="";
      for(let i=0;i<stringtodel.length;i++){
          if(stringtodel[i]!==charToDelete || i===index){
              ans=ans+stringtodel[i];
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
    const color = count > 1 && stringToRender[ind]!==" " ? alphabetColors[stringToRender[ind]] : '#fff';
    renderedChars.push(
      <div
        key={ind}
        className="char-card"
        style={{ backgroundColor: color }}
        onClick={() => count > 1 && stringToRender[ind]!==" " && handleDeleteChar(stringToRender[ind],ind,stringToRender)}
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
      {/* useContext to pass values to hierarchy of components */}
      <MyContext.Provider 
      value={{
         originalString, 
         renderString, 
         stringToEdit,
         resultString,
         handleSubmit, 
         handleInputChange,
         inputValue,
         handleGoBack
      }}>
      {/* Main UI componenents goes here  */}
      {stringToEdit ? (
        <Screen2/>
      ) : (
        <Inputform />
      )}
       </MyContext.Provider>
    </div>
  );
}

export default App;
export {MyContext};