import React from 'react';

export const Input = ({ type, labelName, id, name,
   value, onChange, placeholder, min, max }) => (
    type === 'text' ?
      (<>
        <label htmlFor={ id }>
          { labelName } <br />
          <input
            type={ type }
            id={ id }
            name={ name }
            value={ value }
            placeholder={ placeholder }
            onChange={ onChange } />
        </label>
       </>) :
      (<>
        <label htmlFor={ id }>
          { labelName } <br />
          <input
            type={ type }
            id={ id }
            name={ name }
            value={ value }
            min={ min } max={ max }
            onChange={ onChange } />
        </label>
       </>)
);
