import React from 'react'
import { Link } from 'react-router-dom'
import AboutPlayer from './AboutPlayer';

const AboutCard = ({ title, desription, link }) => {
  return (
    <div className="about-card-container">
      <div className="about-info">
        <h3>{title}</h3>
        <p>{desription}</p>
        <Link to={link}><p>READ MORE</p></Link>
      </div>
      <div className="about-video">
        <AboutPlayer />
      </div>
    </div>
  )
}

export default AboutCard
