export const handleTable = (querySchedule, unScheduleQuery) => (
  <>
    <p>CONSULTAS AGENDADAS</p>
    <table>
      <thead>
        <tr>
          <th>nomePaciente</th>
          <th>especialidade</th>
          <th>dataConsulta</th>
          <th>horaConsulta</th>
          <th>desmarcar</th>
        </tr>
      </thead>
      <tbody>
        {querySchedule.map((consulta, i) => (
          <tr key={ i }>
            <td>{ consulta.nomePaciente }</td>
            <td>{ consulta.especialidade }</td>
            <td>{ consulta.dataConsulta }</td>
            <td>{ consulta.horaConsulta }</td>
            <button type="button" onClick={ () => unScheduleQuery(i) }> X </button>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export const historyTable = (queryHistory) => (
  <>
    <p>CONSULTAS DESMARCADAS</p>
    <table>
      <thead>
        <tr>
          <th>nomePaciente</th>
          <th>especialidade</th>
          <th>dataConsulta</th>
          <th>horaConsulta</th>
          <th>Quando?</th>
        </tr>
      </thead>
      <tbody>
        {queryHistory.map((consulta, i) => (
          <tr key={ i }>
            <td>{ consulta.nomePaciente }</td>
            <td>{ consulta.especialidade }</td>
            <td>{ consulta.dataConsulta }</td>
            <td>{ consulta.horaConsulta }</td>
            <td>{ consulta.dataDesmarcada }</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export let btnClass = 'sw-btn';
export let spnClass = 'sw-spn';
export const swChange = (sw, setSw) => {
  setSw(!sw);
  !sw ?
  (btnClass = 'sw-btn active') &&
  (spnClass = 'sw-spn active') :
  (btnClass = 'sw-btn') && (spnClass = 'sw-spn')
}
