import React from 'react';
import { useNavigate } from '../utils/navigation';

const NavBar = () => {
  const { currentView, navigateTo } = useNavigate();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">MiApp</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => navigateTo('home')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentView === 'home' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('team')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentView === 'team' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              >
                Equipo
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentView === 'contact' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              >
                Contacto
              </button>
              <button
                onClick={() => navigateTo('admin')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentView === 'admin' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              >
                Admin
              </button>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={() => navigateTo(currentView === 'admin' ? 'logout' : 'login')}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {currentView === 'admin' ? 'Salir' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// DONE