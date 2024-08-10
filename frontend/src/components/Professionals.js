import React from 'react';
import './Professionals.css';

import architectsImage from '../assets/professionals/team-2-270x273.jpg';
import civilEngineersImage from '../assets/professionals/team-civilengineer.png';
import electricianImage from '../assets/professionals/team-electrician.png';
import plumberImage from '../assets/professionals/team-plumber.png';
import carpenterImage from '../assets/professionals/team-carpenter.png';
import painterImage from '../assets/professionals/team-painter.png';
import contractorsImage from '../assets/professionals/team-contractors.png';
import interiorDesignersImage from '../assets/professionals/team-Interior_designers.png';
import hvacTechnicianImage from '../assets/professionals/team-hvac_technician.png';
import masonsImage from '../assets/professionals/team-masons.png';
import roofersImage from '../assets/professionals/team-roofers.png';
import flooringSpecialistImage from '../assets/professionals/team-flooring_specialist.png';
import landscapersImage from '../assets/professionals/team-landscapers.png';
import surveyorsImage from '../assets/professionals/team-surveyors.png';
import solarPanelInstallerImage from '../assets/professionals/team-solarpanel_installer.png';
import smartHomeTechniciansImage from '../assets/professionals/team-smarthome_technicians.png';
import LazyImage from './LazyImage';

const professionals = [
  { name: 'Architects', image: architectsImage },
  { name: 'Civil Engineers', image: civilEngineersImage },
  { name: 'Electrician', image: electricianImage },
  { name: 'Plumber', image: plumberImage },
  { name: 'Carpenter', image: carpenterImage },
  { name: 'Painter', image: painterImage },
  { name: 'Contractors', image: contractorsImage },
  { name: 'Interior designers', image: interiorDesignersImage },
  { name: 'HVAC Technician', image: hvacTechnicianImage },
  { name: 'Masons', image: masonsImage },
  { name: 'Roofers', image: roofersImage },
  { name: 'Flooring specialist', image: flooringSpecialistImage },
  { name: 'Landscapers', image: landscapersImage },
  { name: 'Surveyors', image: surveyorsImage },
  { name: 'Solar panel Installer', image: solarPanelInstallerImage },
  { name: 'Smart Home technicians', image: smartHomeTechniciansImage },
];

const Professionals = () => {
  return (
    <div className="professionals-container">
      <h2>Find Professionals</h2>
      <div className="professionals-grid">
        {professionals.map((professional, index) => (
          <div key={index} className="professional-card">
            <LazyImage src={professional.image} alt={professional.alt} className="design-image" />
            <h3>{professional.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
