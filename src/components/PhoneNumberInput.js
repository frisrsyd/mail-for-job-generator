// src/components/PhoneNumberInput.js
import React from 'react';

function PhoneNumberInput({ phoneNumber, setPhoneNumber }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-400">Your Phone Number</label>
      <input 
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
        className="mt-1 p-2 border rounded w-full dark:text-gray-700"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
}

export default PhoneNumberInput;
