// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Email Template Generator</p>
      <div className="mt-2">
        <a href="https://instagram.com/frisrsyd" className="mx-2" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com/in/frisrsyd" className="mx-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/frisrsyd" className="mx-2" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://medium.com/@frisrsyd" className="mx-2" target="_blank" rel="noopener noreferrer">Medium</a>
      </div>
    </footer>
  );
}

export default Footer;
