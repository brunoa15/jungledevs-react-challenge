import React, { useEffect, useState } from 'react'
import './Home.scss'
import playButton from '../../assets/images/play-button.svg'
import manageNannyImage from '../../assets/images/manage-nanny-image.png'
import roundedProfileImage from '../../assets/images/rounded-profile-image.png'
import imageSection1 from '../../assets/images/image-section-1.png'

const Home = () => {
  const [state, setState] = useState()

  useEffect(() => {
    setState({
      name: '',
      email: '',
    })
  }, [])

  return (
    <>
      <div className="lp-hero">
        <section className="lp-hero__area-title">
          <h1 className="lp-hero__title">Easily create or join a local nanny share with Hapu</h1>
          <p className="lp-hero__description">
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.
          </p>
          <div className="lp-hero__flex-area">
            <button className="lp-hero__button">
              <img width="48" height="48" src={playButton} alt="play icon - see hapu in action" />
            </button>
            <a className="lp-link" href="/">See hapu in action (27 seconds)</a>
          </div>
        </section>
        <div className="lp-hero__area-img">
          <img src={manageNannyImage} alt="manage your nanny share" />
        </div>
      </div>
      <div className="lp-body">
        <section className="lp-body__white-area">
          <div className="lp-body__white-area-wrapper">
            <img src={roundedProfileImage} alt="example profile avatar" />
            <div className="lp-body__white-area-link-wraper">
              <a className="lp-link lp-link--purple lp-link--margin-24" href="/">
                Sarah's day care available now in North Sydney
              </a>
            </div>
            <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
          </div>
        </section>
        <div className="lp-body__main-container">
          <section className="lp-body__section-1">
            <div className="lp-body__section-img">
              <img
                loading="lazy"
                src={imageSection1}
                alt="share your home, nanny and costs"
                width="auto"
                height="90%"
              />
            </div>
            <h2 className="lp-body__section-title lp-body__section-title--narrow">
              Share your home, nanny and costs
            </h2>
            <div className="lp-body__section-text">
              <p>
                You have a fantastic home, a fantastic nanny and wouldn't cutting your 
                costs in half be, well, fantastic?! If only it was easy to connect with 
                other parents to share your costs? Well now it is, with Hapu.&nbsp;
                <a className="lp-link lp-link--purple" href="/">Hapu means tribe</a>
                &nbsp;and it's our foundational 3 tribal principles that empowers you to 
                create and manage your own tribe. A tribe that together has the power to 
                create new affordable solutions in childcare that work for you and your 
                community.
              </p>
            </div>
            <div className="lp-body__section-link">
              <a className="lp-link lp-link--purple" href="/">Ready to get started?</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
