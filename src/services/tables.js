export const handleTable = (appointmentSchedule, nearlyAppointmentTime, unScheduleAppointment) => (
  <>
    <table>
      <caption>CONSULTAS AGENDADAS</caption>
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
        {appointmentSchedule.map((consulta, i) => (
          <tr key={ i }>
            <td>{ consulta.nomePaciente }</td>
            <td>{ consulta.especialidade }</td>
            <td>{ consulta.dataConsulta }</td>
            <td>{ consulta.horaConsulta }</td>
            { nearlyAppointmentTime(consulta.horaConsulta) ?
              <p className="nearly-app"
                title="A CONSULTA OCORRERÁ EM MENOS DE 2 HORAS
                - NÃO É POSSÍVEL DESMARCAR"> ❋ </p> :
              (<button
                className="x"
                type="button"
                title="CLIQUE PARA DESMARCAR"
                onClick={ () => unScheduleAppointment(i) }>
                  ✘ </button>)}
          </tr>
        ))}
      </tbody>
    </table>
    <p>
      <span className="nearly-leg"> ❋ </span>
      A consulta ocorrerá em menos de 2 horas - Não é possível desmarcar
    </p>
  </>
);

export const historyTable = (appointmentHistory) => (
  <>
    <table>
    <caption>CONSULTAS DESMARCADAS</caption>
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
        {appointmentHistory.map((consulta, i) => (
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
