import React from 'react'

const BlogPost = ({ title, desription, link, img }) => {
  return (
    <div className="about-card-container">
      <div className="about-video">
        <img src={img} alt="Blog Post"/>
      </div>
      <div className="about-info">
        <h3>{title}</h3>
        <p>{desription}</p>
        <a href={link}>READ MORE</a>
      </div>
    </div>
  )
}

export default BlogPost