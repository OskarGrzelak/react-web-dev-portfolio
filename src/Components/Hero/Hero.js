import React from 'react'
import Button from '../Button/Button'
import heroImage from '../../img/oskar.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src={heroImage} alt="Oskar Grzelak" />
      </div>
      <div className="hero__text">
        <h1 className="hero__heading hero__heading--primary">Oskar Grzelak</h1>
        <h2 className="hero__heading hero__heading--secondary">
          UI Designer. Web Developer.
        </h2>
        <p className="hero__lead">
          Cześć! Zajmuję się tworzeniem stron internetowych i aplikacji
          webowych. Jeśli potrzebujesz atrakcyjnego, przystającego do
          współczesnych czasów miejsca w internecie, które świetnie będzie
          wyglądać na wszystkich urządzeniach, trafiłeś idealnie.
        </p>
        <Button to="mailto:oskar@oskargrzelak.pl">Napisz do mnie</Button>
      </div>
    </div>
  )
}

export default Hero
