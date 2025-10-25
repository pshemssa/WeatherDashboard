import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Developer Dashboard
            </h1>
          </div>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
                     text-gray-800 dark:text-white px-4 py-2 rounded-lg font-medium 
                     transition-colors duration-300 flex items-center space-x-2"
          >
            <span>{theme === 'light' ? '🌙' : '☀️'}</span>
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;