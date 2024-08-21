// src/components/Navbar.js
import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Email Template Generator</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-700"
        >
          {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
