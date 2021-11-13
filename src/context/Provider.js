import React, { useState } from 'react';
import { Context } from './Context';

export const Provider = ({ children }) => {
  const [querySchedule, setQuerySchedule] = useState([]);
  const [queryHistory, setQueryHistory] = useState([])
  const [schedule, setSchedule] = useState(false);
  const [sw, setSw] = useState(false);

  schedule ?
  setTimeout(() => { setSchedule(false) }, 2500)
    : console.log('easter-egg')

  const contextValue = {
    querySchedule,
    setQuerySchedule,
    queryHistory,
    setQueryHistory,
    schedule,
    setSchedule,
    sw,
    setSw,
  }

  return (
    <Context.Provider value={ contextValue } >
      {children}
    </Context.Provider>
  );
}