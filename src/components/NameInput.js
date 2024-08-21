// src/components/NameInput.js
import React from 'react';

function NameInput({ name, setName }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-400">Your Name</label>
      <input 
        type="text" 
        className="mt-1 p-2 border rounded w-full dark:text-gray-700"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default NameInput;
