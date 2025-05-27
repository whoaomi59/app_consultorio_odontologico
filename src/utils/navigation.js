import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('home');
  const [user, setUser] = useState(null); // ahora usamos user

  const navigateTo = (view) => {
    if (view === 'admin' && !user) {
      setCurrentView('login');
    } else if (view === 'logout') {
      setUser(null);
      setCurrentView('home');
    } else {
      setCurrentView(view);
    }
  };

  const login = () => {
    setUser({ username: 'admin' });
    setCurrentView('agenda');
  };

  return (
    <NavigationContext.Provider value={{ 
      currentView, 
      navigateTo, 
      user, 
      login 
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigate = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigate must be used within a NavigationProvider');
  }
  return context;
};
