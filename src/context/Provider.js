import React, { useState } from 'react';
import { Context } from './Context';

export const Provider = ({ children }) => {
  const [consultasOn, setConsultasOn] = useState([]);
  const [schedule, setSchedule] = useState(false);

  const contextValue = {
    consultasOn,
    setConsultasOn,
    schedule,
    setSchedule,
  }

  return (
    <Context.Provider value={ contextValue } >
      {children}
    </Context.Provider>
  );
}