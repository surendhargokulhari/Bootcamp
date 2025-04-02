import React, { createContext, useState, useContext } from 'react';
import './App.css'; // Make sure to create this file for additional styling if needed

// Create a Context for the theme
const ThemeContext = createContext();

// Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumer Component
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center transition-all duration-300 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}
    >
      <h1 className="text-3xl font-bold mb-4">Current Theme: {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 bg-primary"
      >
        Toggle Theme
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
