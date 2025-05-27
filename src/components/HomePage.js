import React from 'react';
import { useNavigate } from '../utils/navigation';

const HomePage = () => {
  const { navigateTo } = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Bienvenido a nuestra plataforma
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
            Explora todas las funcionalidades que tenemos para ofrecerte.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <button
              onClick={() => navigateTo('team')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Conoce al equipo
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;