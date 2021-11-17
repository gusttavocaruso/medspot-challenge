export const agendaRefresh = (appointmentSchedule, agenda) => {
  appointmentSchedule.map((appnt) => 
  // appnt.dataConsulta === dataConsulta ?
    agenda.map((hora) =>
      hora === appnt.horaConsulta ?
      agenda.splice(agenda.indexOf(hora), 1) : agenda) )//: agenda)
}

export const switchElement = (btnClass, spnClass, swChange, sw, setSw) => (
  <>
    <div className="sw">
      <button
        className={ btnClass }
        type="button"
        onClick={ () => swChange(sw, setSw) }>
          <span className={ spnClass }></span>
      </button>
      <p>mostrar todas consultas</p>
    </div>
  </>
);

export const getToday = () => {
  let today = new Date();
  const d = String(today.getDate()).padStart(2, '0');
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const y = today.getFullYear();
  const hr = today.getHours();
  const min = today.getMinutes();
  return today = `${y}-${m}-${d} ${hr}h${min}`;
}

export const nearlyAppointmentTime = (horaConsulta) => {
  const nowHour = parseFloat(getToday().split(' ')[1].split('h').join('.'));
  const appntHour = parseFloat((horaConsulta.split('h').join('.')));
  return ((appntHour - nowHour) >= 2) || appntHour < nowHour ? false : true;
}

export let btnClass = 'sw-btn';
export let spnClass = 'sw-spn';
export const swChange = (sw, setSw) => {
  setSw(!sw);
  !sw ?
  (btnClass = 'sw-btn active') &&
  (spnClass = 'sw-spn active') :
  (btnClass = 'sw-btn') && (spnClass = 'sw-spn')
}
