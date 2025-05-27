import React, { useState } from "react";
import PatientForm from "../../../components/PatientForm";
import PatientList from "../../../components/PatientList";
import PatientDetail from "../../../components/PatientDetail";

const PatientManagement = ({ patients, onSelectPatient }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSavePatient = (patientData) => {
    if (selectedPatient) {
      // Actualizar paciente existente
      onSelectPatient(
        patients.map((p) =>
          p.id === selectedPatient.id ? { ...patientData, id: p.id } : p
        )
      );
    } else {
      // Nuevo paciente
      const newPatient = { ...patientData, id: Date.now() };
      onSelectPatient([...patients, newPatient]);
    }
    setSelectedPatient(null);
  };

  const filteredPatients = patients.filter((patient) =>
    `${patient.nombre} ${patient.apellido}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar paciente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>
        <PatientList
          patients={filteredPatients}
          onSelect={(patient) => {
            setSelectedPatient(patient);
            onSelectPatient(patient);
          }}
          selectedId={selectedPatient?.id}
        />
      </div>
      <div className="lg:col-span-2">
        {selectedPatient ? (
          <div className="space-y-6">
            <PatientDetail patient={selectedPatient} />
            <PatientForm
              initialData={selectedPatient}
              onSave={handleSavePatient}
            />
          </div>
        ) : (
          <PatientForm onSave={handleSavePatient} />
        )}
      </div>
    </div>
  );
};

export default PatientManagement;
