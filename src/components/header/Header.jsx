import React from 'react'
import './Header.scss'
import headerBadge from '../../assets/images/header-badge.svg'

const Header = () => {
  // just simulates the case in which pages comes from an api request
  const pages = [
    { id: 1, name: 'Create Your Nanny Share', link: '/' },
    { id: 2, name: 'Browse Shares', link: '/' },
    { id: 3, name: 'Our Story', link: '/' }
  ]

  return (
    <header className="header">
      <a className="header__link" href="/">
        <img src={headerBadge} alt="home - hapu logo" />
      </a>
      <ul className="header__page-links">
        {!!pages && pages.map((page) => (
          <li key={page.id} className="header__link-list">
            <a className="header__link" href={page.link}>
              {page.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="header__button">Become a Nanny Share Host</button>
      <button className="header__button header__button--no-background">Sign In</button>
    </header>
  )
}

export default Header

