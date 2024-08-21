// src/components/EmailRecipientName.js
import React from 'react';

function EmailRecipientName({ recepiantName, setRecepiantName }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-400">Email Recepiant Name</label>
      <input 
        type="text" 
        className="mt-1 p-2 border rounded w-full dark:text-gray-700"
        value={recepiantName}
        onChange={(e) => setRecepiantName(e.target.value)}
      />
    </div>
  );
}

export default EmailRecipientName;
