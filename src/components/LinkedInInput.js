// src/components/LinkedInInput.js
import React from 'react';

function LinkedInInput({ linkedIn, setLinkedIn }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-400">LinkedIn Profile URL</label>
      <input
        type="url"
        className="mt-1 p-2 border rounded w-full dark:text-gray-700"
        value={linkedIn}
        onChange={(e) => setLinkedIn(e.target.value)}
        placeholder="https://www.linkedin.com/in/your-profile"
        required
      />
    </div>
  );
}

export default LinkedInInput;
