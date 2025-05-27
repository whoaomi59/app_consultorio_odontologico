import React from 'react';

const PatientList = ({ patients, onSelect, selectedId }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-3 border-b">
        <h3 className="font-medium text-gray-700">Lista de Pacientes</h3>
      </div>
      <div className="divide-y">
        {patients.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No hay pacientes registrados</div>
        ) : (
          patients.map(patient => (
            <div
              key={patient.id}
              onClick={() => onSelect(patient)}
              className={`p-3 cursor-pointer transition-colors ${patient.id === selectedId ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{patient.nombre} {patient.apellido}</p>
                  <p className="text-sm text-gray-600">{patient.telefono}</p>
                </div>
                {patient.id === selectedId && (
                  <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PatientList;