import React from 'react';

const PatientDetail = ({ patient }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{patient.nombre} {patient.apellido}</h2>
          <div className="mt-2 space-y-1">
            <p className="text-gray-600"><span className="font-medium">Teléfono:</span> {patient.telefono}</p>
            <p className="text-gray-600"><span className="font-medium">Email:</span> {patient.email || 'No especificado'}</p>
            <p className="text-gray-600"><span className="font-medium">Fecha Nacimiento:</span> {new Date(patient.fechaNacimiento).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {patient.historial?.length || 0} tratamientos
        </div>
      </div>

      {patient.alergias && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-700">Alergias</h3>
          <p className="text-gray-600 mt-1">{patient.alergias}</p>
        </div>
      )}

      {patient.notas && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-700">Notas Médicas</h3>
          <p className="text-gray-600 mt-1">{patient.notas}</p>
        </div>
      )}
    </div>
  );
};

export default PatientDetail;

// DONE