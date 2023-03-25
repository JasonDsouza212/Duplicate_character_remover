import React from 'react';

function Inputform(props) {
  return (
        <form className="input-form" onSubmit={props.onSubmit}>
            <h1 class="large rise">Duplicate Character Remover</h1>
            <label htmlFor="input-field" className='input-title'>Enter a string:</label>
            <input
            type="text"
            id="input-field"
            name="input-field"
            value={props.value}
            onChange={props.onChange}
            />
            <button type="submit" className="submit-button btn">
            Submit
            </button>
        </form>
  );
}

export default Inputform;