import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import logo from '../../img/logo.png'
import cv from '../../img/CV.pdf'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            className="navbar__link"
            activeClassName="navbar__link--active"
            exact
            to="/"
          >
            Główna
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__link"
            activeClassName="navbar__link--active"
            to="/projekty"
          >
            Projekty
          </NavLink>
        </li>
      </ul>
      <Button to={cv} ghost>
        Pobierz CV
      </Button>
    </nav>
  )
}

export default Navbar
