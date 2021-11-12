import React, { useState } from 'react';
import { Context } from './Context';

export const Provider = ({ children }) => {
  const [consultasOn, setConsultasOn] = useState([]);

  const contextValue = {
    consultasOn,
    setConsultasOn,
  }

  return (
    <Context.Provider value={ contextValue } >
      {children}
    </Context.Provider>
  );
}