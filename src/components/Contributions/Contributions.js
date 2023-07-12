import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Contributions.css';
import { contributionsData } from '../../data/contributionsData'
import ContributionsCard from './ContributionsCard';

import openSource from '../../assets/png/open-source.png'

function Contributions() {

  const { theme } = useContext(ThemeContext);
  return (
    <div className="contributions" id="contributions" style={{ backgroundColor: theme.secondary }}>
      <h1 style={{ color: theme.primary }}>Open Source Contributions</h1>
      <div className="contributions-body">
        <div className="contributions-image">
          <img src={openSource} alt="" />
        </div>
        <div className="contributions-description">
          {contributionsData.map(c => (
            <ContributionsCard
              key={c.id}
              id={c.id}
              name={c.name}
              description={c.description}
              image={c.image}
              href={c.href} 
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contributions
