import React from 'react';

const FinanceMetrics = ({ metrics }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-gray-500">Ingresos este mes</h4>
        <p className="text-2xl font-semibold text-gray-900">${metrics.monthlyIncome.toLocaleString()}</p>
        <p className={`text-sm ${metrics.incomeChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {metrics.incomeChange >= 0 ? '↑' : '↓'} {Math.abs(metrics.incomeChange)}% vs mes anterior
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-gray-500">Citas completadas</h4>
        <p className="text-2xl font-semibold text-gray-900">{metrics.completedAppointments}</p>
        <p className={`text-sm ${metrics.appointmentsChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {metrics.appointmentsChange >= 0 ? '↑' : '↓'} {Math.abs(metrics.appointmentsChange)}% vs mes anterior
        </p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-gray-500">Pacientes nuevos</h4>
        <p className="text-2xl font-semibold text-gray-900">{metrics.newPatients}</p>
        <p className={`text-sm ${metrics.patientsChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {metrics.patientsChange >= 0 ? '↑' : '↓'} {Math.abs(metrics.patientsChange)}% vs mes anterior
        </p>
      </div>
    </div>
  );
};

export default FinanceMetrics;