// src/components/CompanyInput.js
import React from 'react';

function CompanyInput({ company, setCompany }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-400">Company Name</label>
      <input 
        type="text" 
        className="mt-1 p-2 border rounded w-full dark:text-gray-700"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
    </div>
  );
}

export default CompanyInput;
