import React, { useState, useEffect } from 'react'
import servicesImage from '../../img/oskar_2.JPG'
import { services } from './data'
import './Services.css'

const Services = () => {
  const [currentService, setCurrentService] = useState({})
  useEffect(() => {
    setCurrentService(services[0])
  }, [])
  const handleMenuClick = (e) => {
    setCurrentService(services.find((service) => service.id === e.target.id))
  }
  return (
    <div className="services">
      <div className="services__image">
        <img src={servicesImage} alt="" />
      </div>
      <div className="services__menu">
        <h2 className="services__heading">W czym mogę pomóc?</h2>
        <ul className="services__list">
          {services.map((service) => (
            <li
              className={`services__item ${
                currentService.id === service.id ? 'services__item--active' : ''
              }`}
              id={service.id}
              onClick={handleMenuClick}
              key={service.id}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="services__details" key={currentService.id}>
        {currentService.details
          ? currentService.details.split('\n\n').map((paragraph, index) => (
              <p
                className={
                  index === 0 ? 'services__lead' : 'services__paragraph'
                }
                key={index}
              >
                {paragraph}
              </p>
            ))
          : ''}
        <button className="services__cta">{currentService.cta}</button>
      </div>
    </div>
  )
}

export default Services
