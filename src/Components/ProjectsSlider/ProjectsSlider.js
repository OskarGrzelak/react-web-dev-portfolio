import React, { useState, useEffect } from 'react'
import mockup from '../../img/mockup.png'
import './ProjectsSlider.css'
import { slides } from './data'

const ProjectsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState({})
  useEffect(() => {
    setCurrentSlide(slides[0])
  }, [])
  const handleMenuClick = (e) => {
    setCurrentSlide(slides.find((slide) => slide.id === e.target.id))
  }
  return (
    <div className="slider">
      <div className="slider__menu">
        <ul className="slider__list">
          {slides.map((slide) => (
            <li
              className={`slider__item ${
                currentSlide.id === slide.id ? 'slider__item--active' : ''
              }`}
              id={slide.id}
              key={slide.id}
              onClick={handleMenuClick}
            >
              {slide.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="slider__image-container">
        <div className="slider__image">
          <img src={currentSlide.image} alt="" key={currentSlide.id} />
        </div>
        <div className="slider__image">
          <img src={mockup} alt="" />
        </div>
      </div>
      <div className="slider__description" key={currentSlide.id}>
        <p>{currentSlide.description}</p>
      </div>
    </div>
  )
}

export default ProjectsSlider
