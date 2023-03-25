import React, { useContext } from 'react';
import {MyContext} from '../App'

function Inputform() {
  const {handleSubmit , handleInputChange , inputValue } = useContext(MyContext)
  return (
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
  );
}

export default Inputform;