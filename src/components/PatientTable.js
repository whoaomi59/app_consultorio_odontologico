import React from 'react';
import { formatDate } from '../utils/dateHelpers';

const PatientTable = ({ patients, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última visita</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Próxima cita</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(patient.lastVisit)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(patient.nextAppointment)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(patient.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(patient.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;