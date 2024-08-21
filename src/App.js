// src/App.js
import React, { useState, useEffect } from 'react';
import NameInput from './components/NameInput';
import CompanyInput from './components/CompanyInput';
import JobTitleDropdown from './components/JobTitleDropdown';
import { generateEmailBody } from './utils/generateEmailBody';
import PhoneNumberInput from './components/PhoneNumberInput';
import JobSeekEmailInput from './components/JobSeekEmailInput';
import LinkedInInput from './components/LinkedInInput';
import EmailRecipientName from './components/EmailRecipientName';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('FullStack Developer');
  const [emailBody, setEmailBody] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [linkedIn, setLinkedIn] = useState();
  const [recepiantName, setRecepiantName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Effect hook to handle real-time generation
  useEffect(() => {
    const body = generateEmailBody(jobTitle, name, company, phoneNumber, linkedIn, recepiantName);
    const subject = `${jobTitle} - ${name} - ${company}`;
    setEmailBody(body);
    setEmailSubject(subject);
  }, [name, company, jobTitle, phoneNumber, linkedIn, recepiantName]); // Dependencies: Update when these values change

  const handleSendEmail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Email Template Generator</h1>
          <NameInput name={name} setName={setName} />
          <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
          <LinkedInInput linkedIn={linkedIn} setLinkedIn={setLinkedIn} />
          <EmailRecipientName recepiantName={recepiantName} setRecepiantName={setRecepiantName} />
          <JobSeekEmailInput email={email} setEmail={setEmail} />
          <CompanyInput company={company} setCompany={setCompany} />
          <JobTitleDropdown jobTitle={jobTitle} setJobTitle={setJobTitle} />

          {email && (
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
              <h2 className="text-xl font-semibold">Generated Email</h2>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-400">Jobseeker Email</label>
                <input 
                  type="mail" 
                  className="mt-1 p-2 border rounded w-full bg-gray-200 dark:text-gray-700 cursor-not-allowed"
                  value={email}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-400">Subject</label>
                <input 
                  type="text" 
                  className="mt-1 p-2 border rounded w-full dark:text-gray-700"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-400">Email Body</label>
                <textarea
                  className="mt-1 p-2 border rounded w-full dark:text-gray-700"
                  rows="10"
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                />
              </div>
              <button
                className="mt-4 p-2 bg-blue-500 dark:bg-blue-700 text-white rounded"
                onClick={handleSendEmail}
              >
                Send Email
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
