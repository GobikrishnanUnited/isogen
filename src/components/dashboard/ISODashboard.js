/*eslint-disable*/
import React, { useState } from 'react';
import ComponentCard from '../ComponentCard';
import './ISODashboard.css'; // Import the CSS file

const IsoDashboard = () => {
  const [isoStandards, setIsoStandards] = useState([
    { id: 1, name: 'ISO 9001', description: 'Quality Management' },
    { id: 2, name: 'ISO/IEC 27000', description: 'IT Security and Privacy Protection' },
    { id: 3, name: 'ISO 14001', description: 'Environmental Management' },
    { id: 4, name: 'ISO 50001', description: 'Energy Management' },
    { id: 5, name: 'ISO 20000', description: 'Service Management' },
    { id: 6, name: 'ISO 22301', description: 'Business Continuity' },
    { id: 7, name: 'ISO 27005', description: 'Information Risk Management' },
    { id: 8, name: 'ISO 20275', description: 'Legal Forms Code List' },
  ]);

  return (
    <ComponentCard title='ISO Codes'>
      <div className="iso-dashboard">
        <h6 className="iso-header">ISO Standards</h6>
        <ul className="iso-list">
          {isoStandards.map(standard => (
            <li key={standard.id} className="iso-item">
              <h6 className="iso-name">{standard.name}</h6>
              <p className="iso-description">{standard.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </ComponentCard>
  );
};

export default IsoDashboard;
