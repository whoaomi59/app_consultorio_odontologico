import React from 'react';

const AdminHeader = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 15l8-8m0 0l-8-8m8 8H4m6 6l-8 8m0 0l8 8m-8-8h16" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800">Panel Administrativo</h1>
        </div>
        <button 
          onClick={onLogout}
          className="text-gray-600 hover:text-blue-600 transition flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;