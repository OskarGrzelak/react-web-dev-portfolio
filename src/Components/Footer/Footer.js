import React from 'react'
import footerImage from '../../img/oskar.jpg'
import { ReactComponent as GithubLogo } from '../../img/github-logo.svg'
import { ReactComponent as LinkedinLogo } from '../../img/linkedin-logo.svg'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__image">
          <img src={footerImage} alt="Oskar Grzelak" />
        </div>
        <div className="footer__text">
          <h2 className="footer__heading">Oskar Grzelak</h2>
          <p>
            Jestem lubiącym wyzwania front-end developerem. Tworząc strony i
            aplikacje internetowe, zawsze dbam o wypełnienie celów klienta i
            myślę o zadowoleniu użytkownika końcowego.
          </p>
        </div>
        <div className="footer__social">
          <a
            href="https://github.com/OskarGrzelak"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/oskargrzelak/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo />
          </a>
        </div>
      </div>
      <div className="footer__copy">
        <p>© 2018-2021 by Oskar Grzelak</p>
      </div>
    </footer>
  )
}

export default Footer
