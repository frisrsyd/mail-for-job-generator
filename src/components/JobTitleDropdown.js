// src/components/JobTitleDropdown.js
import React from 'react';

function JobTitleDropdown({ jobTitle, setJobTitle }) {
  const jobTitles = [
    'FullStack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Android Developer',
    'UI/UX Designer',
    'Mobile Engineer',
    'Quality Engineer',
    'Quality Assurance',
    'Other',
  ];

  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-400">Job Title</label>
      <select 
        className="mt-1 p-2 border rounded w-full dark:text-gray-700"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      >
        {jobTitles.map(title => (
          <option key={title} value={title}>{title}</option>
        ))}
      </select>
    </div>
  );
}

export default JobTitleDropdown;
