import React, { useState } from "react";
import { NavigationProvider, useNavigate } from "./utils/navigation";
import Login from "./components/Login";

import DentalHeader from "./components/DentalHeader";
import AppointmentCalendar from "./pages/admin/agenda/AppointmentCalendar";
import PatientManagement from "./pages/admin/pacientes/PatientManagement";
import TreatmentPlan from "./pages/admin/tratamientos/TreatmentPlan";
import FinancialReports from "./pages/admin/finanzas/FinancialReports";

import { pacientes, tratamientos, dentistas } from "./mock/dentalData";
import Home from "./pages/Home";

const AppContent = () => {
  const { currentView, navigateTo, user } = useNavigate();
  const [patients, setPatients] = useState(pacientes);
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleAddAppointment = (appt) => {
    setAppointments([...appointments, { ...appt, id: Date.now() }]);
  };

  const handleSaveTreatmentPlan = (patientId, plan) => {
    setPatients(
      patients.map((p) => {
        if (p.id === patientId) {
          const updatedHistorial = [...(p.historial || []), plan];
          return { ...p, historial: updatedHistorial };
        }
        return p;
      })
    );
  };

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DentalHeader />

      <div className="container mx-auto p-4">
        {currentView === "home" && <Home />}
        {/* ok */}
        {currentView === "agenda" && (
          <AppointmentCalendar
            appointments={appointments}
            dentists={dentistas}
            onAddAppointment={handleAddAppointment}
          />
        )}
        {/* ok */}
        {currentView === "pacientes" && (
          <PatientManagement
            patients={patients}
            onSelectPatient={setSelectedPatient}
          />
        )}
        {/* ok */}
        {currentView === "tratamientos" && selectedPatient && (
          <TreatmentPlan
            patient={selectedPatient}
            treatments={tratamientos}
            onSavePlan={(plan) =>
              handleSaveTreatmentPlan(selectedPatient.id, plan)
            }
          />
        )}
        {/* ok */}
        {currentView === "finanzas" && <FinancialReports patients={patients} />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};

export default App;

// DONE
