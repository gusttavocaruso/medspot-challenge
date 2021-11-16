export const agenda = [
  '09h00',
  '09h30',
  '10h00',
  '10h30',
  '11h00',
  '11h30',
  '12h00',
  '12h30',
  '13h00',
  '13h30',
  '14h00',
  '14h30',
  '15h00',
  '15h30',
  '16h00',
  '16h30',
  '17h00',
  '17h30',
];

export const specialities = [
  'Oftalmologista',
  'Cardiologista',
  'Ortopedista',
  'Urologista',
  'Ginecologista',
  'Nutricionista'
];

export const getToday = () => {
  let today = new Date();
  const d = String(today.getDate()).padStart(2, '0');
  const m = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const y = today.getFullYear();
  const hr = today.getHours();
  const min = today.getMinutes();
  return today = `${y}-${m}-${d} ${hr}h${min}`;
}

export const nearlyAppointmentTime = (horaConsulta) => {
  const nowHour = parseFloat(getToday().split(' ')[1].split('h').join('.'));
  console.log(nowHour)
  const appntHour = parseFloat((horaConsulta.split('h').join('.')));
  return ((appntHour - 12) <= 2) ? true : false;
}
