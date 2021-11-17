import React, { useState } from 'react';
import { Context } from './Context';

export const Provider = ({ children }) => {
  const [appointmentSchedule, setAppointmentSchedule] = useState([]);
  const [appointmentHistory, setAppointmentHistory] = useState([])
  const [scheduled, setScheduled] = useState(false);
  const [sw, setSw] = useState(false);
  const [appointment, setAppointment] = useState(
    { nomePaciente: '', especialidade: '', dataConsulta: '', horaConsulta: '' });

  scheduled ?
  setTimeout(() => { setScheduled(false) }, 2500)
    : console.log('easter-egg')

  const contextValue = {
    appointmentSchedule,
    setAppointmentSchedule,
    appointmentHistory,
    setAppointmentHistory,
    scheduled,
    setScheduled,
    sw,
    setSw,
    appointment,
    setAppointment,
  }

  return (
    <Context.Provider value={ contextValue } >
      {children}
    </Context.Provider>
  );
}