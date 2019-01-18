import React from 'react'

const SolutionCard = ({ img, title, desription, link }) => {
  return (
    <div className="solution-card">
      <img src={img} alt="solution icon"/>
      <div>
        <h3>{title}</h3>
        <p>{desription}</p>
        <a href={link}>READ MORE</a>
      </div>
    </div>
  )
}

export default SolutionCard