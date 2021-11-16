import React, { useState } from 'react';
import { Context } from './Context';

export const Provider = ({ children }) => {
  const [appointmentSchedule, setAppointmentSchedule] = useState([]);
  const [appointmentHistory, setAppointmentHistory] = useState([])
  const [schedule, setSchedule] = useState(false);
  const [sw, setSw] = useState(false);
  const [appointment, setAppointment] = useState(
    { nomePaciente: '', especialidade: '', dataConsulta: '', horaConsulta: '' });

  schedule ?
  setTimeout(() => { setSchedule(false) }, 2500)
    : console.log('easter-egg')

  const contextValue = {
    appointmentSchedule,
    setAppointmentSchedule,
    appointmentHistory,
    setAppointmentHistory,
    schedule,
    setSchedule,
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