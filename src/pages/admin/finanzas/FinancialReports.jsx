import React, { useState } from "react";

const FinancialReports = ({ patients }) => {
  const [timeRange, setTimeRange] = useState("month");
  const [activeTab, setActiveTab] = useState("income");

  // Calcular datos financieros
  const calculateFinancialData = () => {
    const incomeData = {};
    const treatmentsData = {};
    const pendingPayments = [];

    patients.forEach((patient) => {
      if (patient.historial) {
        patient.historial.forEach((treatment) => {
          // Agrupar por mes
          const treatmentDate = new Date(treatment.date);
          const monthYear = `${
            treatmentDate.getMonth() + 1
          }/${treatmentDate.getFullYear()}`;

          // Ingresos
          incomeData[monthYear] =
            (incomeData[monthYear] || 0) + (treatment.costo || 0);

          // Tratamientos
          treatmentsData[treatment.tratamiento] =
            (treatmentsData[treatment.tratamiento] || 0) + 1;

          // Pagos pendientes
          if (!treatment.pagado) {
            pendingPayments.push({
              patient: `${patient.nombre} ${patient.apellido}`,
              treatment: treatment.tratamiento,
              amount: treatment.costo,
              date: treatment.date,
            });
          }
        });
      }
    });

    return { incomeData, treatmentsData, pendingPayments };
  };

  const { incomeData, treatmentsData, pendingPayments } =
    calculateFinancialData();

  // Convertir datos a arrays para visualización
  const incomeChartData = Object.entries(incomeData).map(([month, amount]) => ({
    month,
    amount,
  }));

  const treatmentsChartData = Object.entries(treatmentsData)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-xl font-semibold">Reportes Financieros</h2>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setTimeRange("month")}
            className={`px-3 py-1 rounded ${
              timeRange === "month" ? "bg-white text-blue-600" : "bg-blue-500"
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setTimeRange("year")}
            className={`px-3 py-1 rounded ${
              timeRange === "year" ? "bg-white text-blue-600" : "bg-blue-500"
            }`}
          >
            Anual
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab("income")}
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === "income"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Ingresos
          </button>
          <button
            onClick={() => setActiveTab("treatments")}
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === "treatments"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Tratamientos
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === "pending"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Pendientes
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "income" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Ingresos por Mes
            </h3>
            <div className="space-y-4">
              {incomeChartData.map(({ month, amount }) => (
                <div key={month} className="flex items-center">
                  <div className="w-24 font-medium">{month}</div>
                  <div className="flex-1">
                    <div
                      className="bg-blue-100 h-8 rounded flex items-center px-2"
                      style={{
                        width: `${Math.min(100, (amount / 50000) * 100)}%`,
                      }}
                    >
                      <span className="text-sm text-blue-800">
                        ${amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "treatments" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Tratamientos más Frecuentes
            </h3>
            <div className="space-y-4">
              {treatmentsChartData.map(({ name, count }) => (
                <div key={name} className="flex items-center">
                  <div className="w-48 font-medium">{name}</div>
                  <div className="flex-1">
                    <div
                      className="bg-green-100 h-8 rounded flex items-center px-2"
                      style={{ width: `${Math.min(100, (count / 10) * 100)}%` }}
                    >
                      <span className="text-sm text-green-800">
                        {count} realizados
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "pending" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Pagos Pendientes
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Paciente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tratamiento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pendingPayments.map((payment, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {payment.patient}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payment.treatment}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${payment.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(payment.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialReports;

// DONE
