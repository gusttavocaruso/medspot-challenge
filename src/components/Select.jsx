import React from 'react';

export const Select = ({ labelName, id, name, value,
  onChange, defaultOpt, optionsArray }) => (
    <>
      <label htmlFor={ id }>
        { labelName } <br />
        <select
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }>
            <option
              value="" hidden
              selected disabled >
                { defaultOpt }
            </option>
            { optionsArray.map((i, j) =>
              <option key={j}>{i}</option> ) }
        </select>
      </label>
    </>
);
