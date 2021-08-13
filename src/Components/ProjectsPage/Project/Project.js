import React from 'react'
import './Project.css'

const Project = ({ project }) => {
  return (
    <li className="project">
      <div className="project__image">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project__info">
        <h2 className="project__heading">{project.name}</h2>
        <ul className="project__tags">
          {project.tags.map((tag) => (
            <li className="project__tag" key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project__description">
          <p>{project.description}</p>
        </div>
        <a href={project.link} className="project__cta">Odwiedź stronę</a>
      </div>
    </li>
  )
}

export default Project