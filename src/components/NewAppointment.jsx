import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { agenda, specialities } from '../services/data';

export const NewAppointment = () => {
  const contexto = useContext(Context);
  const { appointmentSchedule, setAppointmentSchedule, setSchedule, appointment, setAppointment } = contexto;
  const { nomePaciente, especialidade, dataConsulta, horaConsulta } = appointment;

  const handleAppointmentChange = ({ target }) => {
    setAppointment({
      ...appointment,
      [target.name]: target.value,
    })
  }

  const submitNewAppointment = () => {
    setAppointmentSchedule([...appointmentSchedule, appointment]);
    setSchedule(true);
    setAppointment(
      { nomePaciente: '', especialidade: '',  dataConsulta: '',  horaConsulta: '' });
  }

  appointmentSchedule.map((qry) => 
    // qry.dataConsulta === dataConsulta ?
      agenda.map((hora) =>
        hora === qry.horaConsulta ?
        agenda.splice(agenda.indexOf(hora), 1) : agenda) )//: agenda)

  const preventWrong = (
    (nomePaciente === '') ||
    (especialidade === '') ||
    (horaConsulta === '') ||
    (dataConsulta === '')) ? true : false;

  return (
    <form action="submit" className="formulario-cadastro">

      <h2>Marcar consulta</h2>

      <label htmlFor="nome-paciente">
        Nome: <br />
        <input
          type="text"
          id="nome-paciente"
          name="nomePaciente"
          value={ nomePaciente }
          placeholder="Digite seu nome"
          onChange={ handleAppointmentChange } />
      </label>

      <label htmlFor="specialist-opt">
        Especialidade médica: <br />
        <select
          id="specialist-opt"
          name="especialidade"
          value={ especialidade }
          onChange={ handleAppointmentChange }>
          <option value="" selected disabled hidden>Selecione</option>
          {specialities.map((i, j) => <option key={ j }>{ i }</option> )}
        </select>
      </label>

      <label htmlFor="data-consulta">
        Data para consulta: <br />
        <input
          type="date"
          min="2021-12-01" max="2021-12-01"
          id="data-consulta"
          name="dataConsulta"
          value={ dataConsulta }
          onChange={ handleAppointmentChange } />
      </label>

      <label htmlFor="horario-consulta">
        Horário para consulta: <br />
        <select
          id="horarios-consulta"
          name="horaConsulta"
          value={ horaConsulta }
          onChange={ handleAppointmentChange }>
          <option value="" selected disabled hidden>Selecione</option>
          {agenda.map((i, j) => <option key={ j }>{ i }</option>)}
        </select>
      </label>

      <button
        type="button"
        className="standardBtn"
        onClick={ submitNewAppointment }
        disabled={ preventWrong }>
        AGENDAR 
      </button>
      { preventWrong ? <p>preencha todos os campos</p> : <p>✔</p> }

    </form>
  );
}
