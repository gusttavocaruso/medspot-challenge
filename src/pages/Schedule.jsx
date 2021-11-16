import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewAppointment } from '../components/NewAppointment';
import { Context } from '../context/Context';
import setaMed from '../img/medspot_seta.png';
import logoMed from '../img/medspot_logo.png';

export const Schedule = () => {
  const contexto = useContext(Context);
  const { schedule } = contexto;

  return (
    <>
      <img alt="logo" src={ logoMed } className="logo-img" />
      <p className="logo-text">Rápido, prático e seguro</p>

      <NewAppointment />

      <Link to="/consultas" className="link">
        <button type="button" className="rota">
          CONSULTAS
        </button>
      </Link>

      { !schedule ? '' :
        (<>
          <p>Consulta agendada com sucesso!
          <img alt="medspot" src={ setaMed }  className="seta-img"/></p>
         </>) }
    </>
  );
}
