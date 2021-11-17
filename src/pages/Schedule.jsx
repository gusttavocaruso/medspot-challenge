import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewAppointment } from '../components/NewAppointment';
import { Context } from '../context/Context';
import setaMedSpot from '../img/medspot_seta.png';
import logoMedSpot from '../img/medspot_logo.png';

export const Schedule = () => {
  const contexto = useContext(Context);
  const { scheduled } = contexto;

  return (
    <>
      <img alt="logo" src={ logoMedSpot } className="logo-img" />
      <p className="logo-text">Rápido, prático e seguro</p>

      <NewAppointment />

      <Link to="/consultas" className="link">
        <button type="button" className="rota">
          CONSULTAS
        </button>
      </Link>

      { !scheduled ? '' :
        ( <p>
            Consulta agendada com sucesso!
            <img alt="seta" src={ setaMedSpot } className="seta-img"/>
          </p> ) }
    </>
  );
}
