import React from 'react'
import './Home.scss'
import playButton from '../../assets/images/play-button.svg'
import manageNannyImage from '../../assets/images/manage-nanny-image.png'

const Home = () => {
  return (
    <section className="lp-header">
      <div className="lp-header__area-title">
        <h1 className="lp-header__title">Easily create or join a local nanny share with Hapu</h1>
        <p className="lp-header__description">Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
        <div className="lp-header__flex-area">
          <button className="lp-header__button lp-header__button--no-decoration">
            <img width="48" height="48" src={playButton} alt="play icon - see hapu in action" />
          </button>
          <a className="lp-header__video-link" href="/">See hapu in action (27 seconds)</a>
        </div>
      </div>
      <div className="lp-header__area-img">
        <img src={manageNannyImage} alt="manage your nanny share" />
      </div>
    </section>
  )
}

export default Home
