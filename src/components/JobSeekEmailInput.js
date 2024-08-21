// src/components/JobSeekEmailInput.js
import React from 'react';

function JobSeekEmailInput({ email, setEmail }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-400">Jobseeker Email</label>
      <input 
        type="mail" 
        className="mt-1 p-2 border rounded w-full dark:text-gray-700"
        placeholder='This field must be filled to generated the email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  );
}

export default JobSeekEmailInput;
