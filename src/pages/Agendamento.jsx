import React from 'react';
import { Link } from 'react-router-dom';
import { AgendamentoConsulta } from '../components/AgendamentoConsulta';

export const Agendamento = () => {
  return (
    <>
      <Link to="/consultas">Consultas</Link>
      <AgendamentoConsulta />
    </>
  );
}
