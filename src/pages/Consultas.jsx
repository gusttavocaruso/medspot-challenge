import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

export const Consultas = () => {
  const contexto = useContext(Context);
  const { consultasOn } = contexto;

  const handleTable = () => (
    <table>
      <thead>
        <tr>
          <th>nomePaciente</th>
          <th>especialidade</th>
          <th>dataConsulta</th>
          <th>horaConsulta</th>
        </tr>
      </thead>
      <tbody>
        {consultasOn.map((consulta, i) => (
          <tr key={ i }>
            <td>{ consulta.nomePaciente }</td>
            <td>{ consulta.especialidade }</td>
            <td>{ consulta.dataConsulta }</td>
            <td>{ consulta.horaConsulta }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return(
    <>
      <Link to="/">Marcar nova consulta</Link>
      <div className="formulario-cadastro">
        { consultasOn.length === 0 ? <h2>Nenhuma consulta agendada</h2>
          : handleTable() }
      </div>
    </>
  );
}
