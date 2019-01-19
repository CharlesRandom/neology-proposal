import React from 'react'

const CorporateIdentityCard = ({ img, title, description }) => {
  return (
    <div className="corpID-card">
      <img src={img} alt="CorpID pic"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default CorporateIdentityCard
