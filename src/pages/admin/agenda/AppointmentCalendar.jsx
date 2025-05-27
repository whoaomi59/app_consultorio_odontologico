import React, { useState } from "react";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  formatDate,
  generateTimeSlots,
} from "../../../utils/dateUtils";

const AppointmentCalendar = ({ appointments, onAddAppointment }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    title: "",
    time: "",
    patient: "",
  });

  const { monthYear, fullDate } = formatDate(currentDate);
  const { monthName, year } = formatDate(selectedDate);
  const timeSlots = generateTimeSlots();

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];

    // Días vacíos al inicio
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = date.toDateString() === selectedDate.toDateString();
      const hasAppointments = appointments.some(
        (appt) => new Date(appt.date).toDateString() === date.toDateString()
      );

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`h-12 border flex flex-col items-center justify-center cursor-pointer
            ${isSelected ? "bg-blue-100 border-blue-500" : "hover:bg-gray-50"}
          `}
        >
          <span className="text-sm">{day}</span>
          {hasAppointments && (
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          )}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleTimeSlotClick = (time) => {
    setNewAppointment({
      title: "Consulta dental",
      time,
      patient: "",
      date: selectedDate.toISOString(),
    });
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAppointment(newAppointment);
    setShowForm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Header del calendario */}
      <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <button
          onClick={handlePrevMonth}
          className="p-2 rounded-full hover:bg-blue-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold">{monthYear}</h2>
        <button
          onClick={handleNextMonth}
          className="p-2 rounded-full hover:bg-blue-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Vista mensual */}
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
            <div
              key={day}
              className="text-center font-medium text-gray-500 text-sm py-2"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
      </div>

      {/* Vista diaria */}
      <div className="border-t p-4">
        <h3 className="text-lg font-semibold mb-4">{fullDate}</h3>
        <div className="space-y-2">
          {timeSlots.map((time) => {
            const isBooked = appointments.some(
              (appt) =>
                new Date(appt.date).toDateString() ===
                  selectedDate.toDateString() && appt.time === time
            );

            return (
              <div key={time} className="flex items-center">
                <span className="w-16 text-gray-500">{time}</span>
                <button
                  onClick={() => !isBooked && handleTimeSlotClick(time)}
                  className={`flex-1 ml-2 p-2 border rounded text-left ${
                    isBooked
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "hover:bg-blue-50"
                  }`}
                >
                  {isBooked ? "Ocupado" : "Disponible"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Formulario de cita */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Nueva Cita Odontológica
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Paciente
                </label>
                <input
                  type="text"
                  name="patient"
                  value={newAppointment.patient}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hora
                </label>
                <input
                  type="text"
                  value={newAppointment.time}
                  readOnly
                  className="w-full p-2 border rounded bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Motivo
                </label>
                <input
                  type="text"
                  name="title"
                  value={newAppointment.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Agendar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentCalendar;

// DONE
