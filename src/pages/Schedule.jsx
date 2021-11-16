import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewAppointment } from '../components/NewAppointment';
import { Context } from '../context/Context';
import logo from '../img/medspot-logo.png';

export const Schedule = () => {
  const contexto = useContext(Context);
  const { schedule } = contexto;

  return (
    <>
      <NewAppointment />

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
