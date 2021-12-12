import React from 'react'
import calendar from '../../assets/images/calendar.svg'
import footerLogo from '../../assets/images/footer-logo.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import './Footer.scss'
import '../../sass/common.scss'

const Footer = () => (
  <footer className="footer">
    <h2 className="footer__title">Become a nanny share host</h2>
    <p className="footer__text">Takes less than 5 minutes to get started</p>
    <button className="footer__button">
      <img className="footer__button-image" src={calendar} alt="calendar icon" />
      <span className="footer__button-title">Create Your Nanny Share</span>
      <span className="footer__button-text">Takes less than 5 minutes</span>
    </button>
    <a className="footer__purple-link" href="/">Or browse local nanny-shares</a>
    <div className="footer__page-links">
      <a className="footer__logo-container" href="/">
        <img src={footerLogo} alt="hapu logo" />
      </a>
      <ul className="footer__links-list">
        <a href="/"><li>Share Your Nanny</li></a>
        <a href="/"><li>Our Story</li></a>
        <a href="/"><li>Blog</li></a>
        <a href="/"><li>Terms & Privacy</li></a>
      </ul>
      <div className="footer__social-links">
        <a href="/"><img src={facebook} alt="facebook" /></a>
        <a href="/"><img src={twitter} alt="twitter" /></a>
        <a href="/"><img src={instagram} alt="instagram" /></a>
      </div>
    </div>
    <div className="footer__line-container">
      <div className="common__vertical-line common__vertical-line--margin-16" />
    </div>
    <span className="footer__copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</span>
  </footer>
)

export default Footer
