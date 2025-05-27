// Funciones de utilidad para manejo de fechas
export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const formatDate = (date) => {
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const yearNum = date.getFullYear();
  
  return {
    dayName,
    day,
    monthName,
    year: yearNum,
    fullDate: `${dayName} ${day} de ${monthName} ${yearNum}`,
    monthYear: `${monthName} ${yearNum}`
  };
};

export const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 18; hour++) {
    slots.push(`${hour}:00`, `${hour}:30`);
  }
  return slots;
};