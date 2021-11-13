import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { getToday } from '../services/data';
import { btnClass, handleTable, historyTable, spnClass, swChange } from '../services/tables';

export const Consultas = () => {
  const contexto = useContext(Context);
  const { querySchedule, setQuerySchedule, queryHistory, setQueryHistory, sw, setSw } = contexto;

  const unScheduleQuery = (i) => {
    const nowTime = getToday();
    setQueryHistory([ ...queryHistory, { ...querySchedule[i], dataDesmarcada: nowTime }]);
    setQuerySchedule(querySchedule.filter((qry) => qry !== querySchedule[i]))
  }

  return(
    <>
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
        { querySchedule.length === 0
          ? <h4>Não há consultas agendadas</h4>
          : handleTable(querySchedule, unScheduleQuery) }
        { sw ? (
          queryHistory.length === 0 ? 
            <h4>Não há consultas desmarcadas</h4> :
            historyTable(queryHistory)) : '' } 
      </div>
    </>
  );
}
