import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { agenda, specialities } from '../services/data';
import { agendaRefresh } from '../services/auxFunctions';
import { Input } from './Input';
import { Select } from './Select';

export const NewAppointment = () => {
  const contexto = useContext(Context);
  const { appointmentSchedule,
    setAppointmentSchedule,
    setScheduled,
    appointment,
    setAppointment } = contexto;
  const { nomePaciente, especialidade, dataConsulta, horaConsulta } = appointment;

  agendaRefresh(appointmentSchedule, agenda);

  const handleAppointmentChange = ({ target }) => {
    setAppointment({ ...appointment, [target.name]: target.value })
  }

  const submitNewAppointment = () => {
    setAppointmentSchedule([...appointmentSchedule, appointment]);
    setScheduled(true);
    setAppointment(
      { nomePaciente: '', especialidade: '',  dataConsulta: '',  horaConsulta: '' });
  }

  const preventEmptyInput = (
    (nomePaciente === '') ||
    (especialidade === '') ||
    (horaConsulta === '') ||
    (dataConsulta === '')) ? true : false;

  return (
    <form action="submit" className="formulario-cadastro">
      <h2>Marcar consulta</h2>

      <Input
        type="text"
        labelName="Nome:"
        id="nome-paciente"
        name="nomePaciente"
        value={ nomePaciente }
        placeholder="Digite seu nome"
        onChange={ handleAppointmentChange } />

      <Select 
        labelName="Especialidade Médica"
        id="specialist-opt"
        name="especialidade"
        value={ especialidade }
        onChange={ handleAppointmentChange }
        defaultOpt="Selecione"
        optionsArray={ specialities } />

      <Input 
        type="date"
        labelName="Data Consulta:"
        id="data-consulta"
        name="dataConsulta"
        value={ dataConsulta }
        min="2021-12-01" max="2021-12-01"
        onChange={ handleAppointmentChange } />

      <Select 
        labelName="Horário Consulta"
        id="horarios-consulta"
        name="horaConsulta"
        value={ horaConsulta }
        onChange={ handleAppointmentChange }
        defaultOpt="Selecione"
        optionsArray={ agenda } />

      <button
        type="button"
        className="standardBtn"
        onClick={ submitNewAppointment }
        disabled={ preventEmptyInput }>
        AGENDAR 
      </button>

      { preventEmptyInput ? <p>preencha todos os campos</p> : <p>✔</p> }

    </form>
  );
}
