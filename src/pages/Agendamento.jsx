import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AgendamentoConsulta } from '../components/AgendamentoConsulta';
import { Context } from '../context/Context';
import logo from '../img/medspot-logo.png';

export const Agendamento = () => {
  const contexto = useContext(Context);
  const { schedule } = contexto;

  return (
    <>
      <AgendamentoConsulta />

      <Link to="/consultas" className="link">
        <button type="button" className="rota">
          CONSULTAS
        </button>
      </Link>

      { !schedule ? '' :
        (<>
          <h4>Consulta agendada com sucesso!</h4>
          <img alt="medspot" src={ logo }  className="logo-img"/>
         </>) }
    </>
  );
}
