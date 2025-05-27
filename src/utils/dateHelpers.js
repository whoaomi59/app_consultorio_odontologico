export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-MX', options);
};

export const formatTime = (timeString) => {
  return timeString.replace(/:00$/, '');
};