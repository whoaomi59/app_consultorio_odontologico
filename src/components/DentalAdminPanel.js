import { useState } from "react";

const DentalAdminPanel = () => {
  const [activeTab, setActiveTab] = useState('citas');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Panel Administrativo</h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('citas')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'citas' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Citas
              </button>
              <button
                onClick={() => setActiveTab('pacientes')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'pacientes' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Pacientes
              </button>
              <button
                onClick={() => setActiveTab('finanzas')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'finanzas' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Finanzas
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'citas' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Próximas citas</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Juan Pérez</h4>
                      <p className="text-sm text-gray-500">Limpieza dental - 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'pacientes' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Lista de pacientes</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última visita</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Próxima cita</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Juan Pérez</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15/06/2023</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20/07/2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'finanzas' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Resumen financiero</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Ingresos este mes</h4>
                    <p className="text-2xl font-semibold text-gray-900">$24,500</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Citas completadas</h4>
                    <p className="text-2xl font-semibold text-gray-900">42</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Pacientes nuevos</h4>
                    <p className="text-2xl font-semibold text-gray-900">8</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalAdminPanel;