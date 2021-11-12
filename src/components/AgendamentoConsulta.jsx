import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import { agenda, specialities } from '../services/data';

export const AgendamentoConsulta = () => {
  const contexto = useContext(Context);
  const { consultasOn, setConsultasOn } = contexto;
  const [query, setQuery] = useState(
    { nomePaciente: '', especialidade: '', dataConsulta: '', horaConsulta: '' });
  const { nomePaciente, especialidade, dataConsulta, horaConsulta } = query;

  const handleQueryChange = ({ target }) => {
    setQuery({
      ...query,
      [target.name]: target.value,
    })
  }

  const submitNewQuery = () => {
    setConsultasOn([...consultasOn, query]);
    setQuery(
      { nomePaciente: '', especialidade: '',  dataConsulta: '',  horaConsulta: '' });
  }

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
          onChange={ handleQueryChange } />
      </label>

      <label htmlFor="specialist-opt">
        Especialidade médica: <br />
        <select
          id="specialist-opt"
          name="especialidade"
          value={ especialidade }
          onChange={ handleQueryChange } >
            {specialities.map((i, j) => <option key={ j }>{ i }</option> )}
        </select>
      </label>

      <label htmlFor="data-consulta">
        Data para consulta: <br />
        <input
          type="date"
          id="data-consulta"
          name="dataConsulta"
          value={ dataConsulta }
          onChange={ handleQueryChange } />
      </label>

      <label htmlFor="horario-consulta">
        Horário para consulta: <br />
        <select
          id="horarios-consulta"
          name="horaConsulta"
          value={ horaConsulta }
          onChange={ handleQueryChange } >
          {agenda.map((i, j) => <option key={ j }>{ i }</option>)}
        </select>
      </label>

      <button type="button" onClick={ submitNewQuery } disabled={ preventWrong }>
        AGENDAR 
      </button>
      <p>preencha todos os campos</p>

    </form>
  );
}
