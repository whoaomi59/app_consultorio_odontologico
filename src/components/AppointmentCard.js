import React from 'react';
import { formatDate, formatTime } from '../utils/dateHelpers';

const AppointmentCard = ({ appointment, onConfirm, onCancel }) => {
  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="ml-4 flex-grow">
        <h4 className="text-sm font-medium text-gray-900">{appointment.patientName}</h4>
        <p className="text-sm text-gray-500">
          {appointment.service} - {formatDate(appointment.date)} a las {formatTime(appointment.time)}
        </p>
      </div>
      <div className="flex space-x-2">
        {appointment.status === 'pending' && (
          <button
            onClick={() => onConfirm(appointment.id)}
            className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded hover:bg-green-200"
          >
            Confirmar
          </button>
        )}
        <button
          onClick={() => onCancel(appointment.id)}
          className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded hover:bg-red-200"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;