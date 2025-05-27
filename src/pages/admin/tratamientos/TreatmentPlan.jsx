import React, { useState } from "react";
import { useNavigate } from "../../../utils/navigation";

const TreatmentPlan = ({ patient, treatments, onSavePlan }) => {
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [observations, setObservations] = useState("");
  const { navigateTo } = useNavigate();

  const handleAddTreatment = (treatment) => {
    setSelectedTreatments([...selectedTreatments, treatment]);
  };

  const handleRemoveTreatment = (treatmentId) => {
    setSelectedTreatments(
      selectedTreatments.filter((t) => t.id !== treatmentId)
    );
  };

  const calculateTotal = () => {
    return selectedTreatments.reduce((sum, t) => sum + t.costo, 0);
  };

  const handleSave = () => {
    const plan = {
      date: new Date().toISOString(),
      treatments: selectedTreatments,
      observations,
      total: calculateTotal(),
      status: "pending",
    };
    onSavePlan(plan);
    navigateTo("pacientes");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">
        Plan de Tratamiento para {patient.nombre}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h4 className="font-medium mb-2">Procedimientos Disponibles</h4>
          <div className="space-y-2">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                className="p-2 border rounded hover:bg-gray-50"
              >
                <div className="flex justify-between">
                  <span>{treatment.nombre}</span>
                  <button
                    onClick={() => handleAddTreatment(treatment)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium mb-2">Plan Propuesto</h4>
          {selectedTreatments.length === 0 ? (
            <p className="text-gray-500">No hay procedimientos seleccionados</p>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                {selectedTreatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className="p-3 border rounded flex justify-between"
                  >
                    <div>
                      <p className="font-medium">{treatment.nombre}</p>
                      <p className="text-sm">Costo: ${treatment.costo}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveTreatment(treatment.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="mb-4">
                  <label className="block font-medium mb-1">
                    Observaciones
                  </label>
                  <textarea
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={3}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="font-medium">Total: ${calculateTotal()}</div>
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Guardar Plan
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentPlan;
