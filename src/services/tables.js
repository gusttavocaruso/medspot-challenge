const msg = 'A CONSULTA OCORRERÁ EM MENOS DE DUAS HORAS - NÃO É POSSÍVEL DESMARCAR'

export const appointmentTable = (appointmentSchedule, nearlyAppointmentTime,
  unScheduleAppointment) => (
  <>
    <table>
      <caption>CONSULTAS AGENDADAS</caption>
      <thead>
        <tr>
          <th>NomePaciente</th>
          <th>Especialidade</th>
          <th>DataConsulta</th>
          <th>HoraConsulta</th>
          <th>Desmarcar</th>
        </tr>
      </thead>
      <tbody>
        {appointmentSchedule.map((consulta, i) => (
          <tr key={ i }>
            <td>{ consulta.nomePaciente }</td>
            <td>{ consulta.especialidade }</td>
            <td>{ consulta.dataConsulta }</td>
            <td>{ consulta.horaConsulta }</td>
            <td>{ nearlyAppointmentTime(consulta.horaConsulta) ?
              (<button
                type="button"
                className="nearly-app"
                onClick={ () => (alert(msg)) }
                title={ msg }>
                  ❋ </button>) :
              (<button
                className="x"
                type="button"
                title="CLIQUE PARA DESMARCAR"
                onClick={ () => unScheduleAppointment(i) }>
                  ✘ </button>)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export const historyTable = (appointmentHistory) => (
  <>
    <table>
      <caption>CONSULTAS DESMARCADAS - HISTÓRICO</caption>
      <thead>
        <tr>
          <th>NomePaciente</th>
          <th>Especialidade</th>
          <th>DataConsulta</th>
          <th>HoraConsulta</th>
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
