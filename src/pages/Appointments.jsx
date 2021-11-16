import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { agenda, getToday, nearlyAppointmentTime } from '../services/data';
import { btnClass, handleTable, historyTable, spnClass, swChange } from '../services/tables';

export const Appointments = () => {
  const contexto = useContext(Context);
  const { appointmentSchedule, setAppointmentSchedule, appointmentHistory, setAppointmentHistory, sw, setSw } = contexto;
  const nowTime = getToday();

  const unScheduleAppointment = (i) => {
    agenda.push(appointmentSchedule[i].horaConsulta)
    agenda.sort();
    setAppointmentHistory([ ...appointmentHistory, { ...appointmentSchedule[i], dataDesmarcada: nowTime }]);
    setAppointmentSchedule(appointmentSchedule.filter((qry) => qry !== appointmentSchedule[i]))
  }

  return(
    <div>
      <div className="header-tables">
        <h2>Consultas</h2>
        <div className="sw">
          <button
            className={ btnClass }
            type="button"
            onClick={ () => swChange(sw, setSw) }>
              <span className={ spnClass }></span>
          </button>
        <p>mostrar todas consultas</p>
        </div>
        <Link to="/" className="link">
          <button type="button" className="rota">
            Marcar uma nova consulta
          </button>
        </Link>
      </div>
      <div className="formulario-cadastro">
        { appointmentSchedule.length === 0
          ? <h4>Não há consultas agendadas</h4>
          : handleTable(appointmentSchedule, nearlyAppointmentTime, unScheduleAppointment) }
        { sw ? (
          appointmentHistory.length === 0 ? 
            <h4>Não há consultas desmarcadas</h4> :
            historyTable(appointmentHistory)) : '' } 
      </div>
    </div>
  );
}
