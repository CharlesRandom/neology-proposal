import React from 'react'

const ProductsCard = ({ title, desription, link, img }) => {
  return (
    <div className="about-card-container">
      <div className="about-info">
        <h3>{title}</h3>
        <p>{desription}</p>
        <a href={link}>READ MORE</a>
      </div>
      <div className="about-video">
        <img src={img} alt=""/>
      </div>
    </div>
  )
}

export default ProductsCard