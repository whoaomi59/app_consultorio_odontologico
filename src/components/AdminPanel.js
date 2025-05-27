import React from 'react';
import { useNavigate } from '../utils/navigation';

const AdminPanel = () => {
  const { navigateTo } = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Panel de Administración</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">Usuarios</h2>
              <p className="text-gray-600 mb-4">Administra los usuarios registrados</p>
              <button
                onClick={() => navigateTo('users')}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Ver usuarios →
              </button>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-2">Contenido</h2>
              <p className="text-gray-600 mb-4">Gestiona el contenido del sitio</p>
              <button
                onClick={() => navigateTo('content')}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Editar contenido →
              </button>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Configuración</h2>
              <p className="text-gray-600 mb-4">Ajustes del sitio</p>
              <button
                onClick={() => navigateTo('settings')}
                className="text-yellow-600 hover:text-yellow-800 font-medium"
              >
                Configurar →
              </button>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigateTo('logout')}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;