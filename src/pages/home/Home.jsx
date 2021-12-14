import React, { useEffect, useState } from 'react'
import './Home.scss'
import playButton from '../../assets/images/play-button.svg'
import manageNannyImage from '../../assets/images/manage-nanny-image.png'
import roundedProfileImage from '../../assets/images/rounded-profile-image.png'
import imageSection1 from '../../assets/images/image-section-1.png'
import imageSection3 from '../../assets/images/image-section-3.png'
import imageSection4 from '../../assets/images/image-section-4.png'
import imageSection5 from '../../assets/images/image-section-5.png'
import LoadingBuffering from '../../assets/images/loading-buffering.gif'
import CustomInput from '../../components/customInput/CustomInput'
import subscribe from '../../services/requests/challengeNewsletter'

const Home = () => {
  const [inputState, setInputState] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({ name: [], email: [] })
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const [heroVersion, setHeroVersion] = useState(null)

  const versionA = 0

  const heroVersionA = {
    title: 'Easily create or join a local nanny share with Hapu',
    description:
      'Hapu is Airbnb for nanny share. Share your home, nanny and costs ' + 
      'and create new flexible, affordable solutions in childcare.',
  }

  const heroVersionB = {
    title: 'Create the childcare you need at a price you can afford',
    description:
      'Connect with other local families to share a nanny from as low as ' +
      '$10.00/hr each. Create your family profile today to get started.'
  }

  useEffect(() => {
    setInputState({ name: '', email: '' })
    setErrors([])
    const heroVersionStored = localStorage.getItem('hapu_hero_version')
    if (heroVersionStored) {
      setHeroVersion(parseInt(heroVersionStored))
    } else {
      const random_version = Math.floor(Math.random() * 2)
      localStorage.setItem('hapu_hero_version', random_version)
      setHeroVersion(random_version)
    }
    setLoading(false)
  }, [])

  const handleSubscription = async () => {
    setErrors([])
    setSending(true)
    const response = await subscribe(inputState)
    if (response.status === 200) {
      setInputState({ name: '', email: '' })
      setSending(false)
      return
    }
    if (response.status === 400) {  
      const nameErrors = []
      const emailErrors = []
      response.data.name?.map((err) => nameErrors.push(err))
      response.data.email?.map((err) => emailErrors.push(err))
      setErrors({ name: nameErrors, email: emailErrors})
      setSending(false)
      return
    }
    setErrors({ name: ['Generic error.']})
    setSending(false)
  }

  return (
    <>
      <div className="lp-hero">
        {!loading && (
          <section className="lp-hero__area-title">
            <h1 className="lp-hero__title">
              {heroVersion === versionA ? heroVersionA.title : heroVersionB.title}
            </h1>
            <p className="lp-hero__description">
              {heroVersion === versionA ? heroVersionA.description : heroVersionB.description}
            </p>
            <div className="lp-hero__flex-area">
              <button className="lp-hero__button">
                <img width="48" height="48" src={playButton} alt="play icon - see hapu in action" />
              </button>
              <a className="lp-link" href="/">See hapu in action (27 seconds)</a>
            </div>
          </section>
        )}
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
          <section className="lp-body__section lp-body__section--mobile">
            <div className="lp-body__section-img">
              <img
                loading="lazy"
                src={imageSection1}
                alt="share your home, nanny and costs"
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
          <div className="lp-body__line-container">
            <div className="common__vertical-line common__vertical-line--margin-80 common__vertical-line--no-margin-mobile" />
          </div>
          <section className="lp-body__section-inputs">
            <h3 className="lp-body__section-title lp-body__section-title--inputs">
              Are you a parent without a nanny and looking to share?
            </h3>
            <div className="lp-body__section-text lp-body__section-text--inputs">
              <p>
                Leave us your name and email and we'll update you as soon as a share becomes
                available in your area!
              </p>
            </div>
            <div className='lp-body__inputs-container'>
              <CustomInput
                value={inputState.name}
                setValue={(name) => setInputState({...inputState, name})}
                placeholder="Your name"
                errors={errors.name}
              />
              <CustomInput
                value={inputState.email}
                setValue={(email) => setInputState({...inputState, email})}
                placeholder="Your email"
                errors={errors.email}
              />
              <button
                className="lp-body__input-button"
                onClick={handleSubscription}
              >
                Send
              </button>
            </div>
            {sending && (
              <div className="lp-body__loading">
                <img width="16" height="16" src={LoadingBuffering} alt="loading" />
                Sending...
              </div>
            )}
          </section>
          <div className="lp-body__line-container">
            <div className="common__vertical-line common__vertical-line--margin-80 common__vertical-line--no-margin-mobile" />
          </div>
          <section className="lp-body__section lp-body__section--left-image lp-body__section--mobile">
            <div className="lp-body__section-img">
              <img
                loading="lazy"
                src={imageSection3}
                alt="Shared payments made simple"
              />
            </div>
            <h2 className="lp-body__section-title lp-body__section-title--mobile-narrow">
              Shared payments made simple
            </h2>
            <div className="lp-body__section-text">
              <p>
                Sometimes it's hard enough just sharing a restaurant bill. Try sharing that
                bill week in, week out and you might encounter more than a few snares. But
                not with Hapu. Simply set your rates and our automated payment system takes
                care of the rest. You need never talk money or who owes what.
              </p>
            </div>
            <div className="lp-body__section-link">
              <a className="lp-link lp-link--purple" href="/">
                Read how Bridget's share (without Hapu) ended over $15
              </a>
            </div>
          </section>
          <div className="lp-body__line-container">
            <div className="common__vertical-line common__vertical-line--margin-80 common__vertical-line--no-margin-mobile" />
          </div>
          <section className="lp-body__section-column">
            <div className="lp-body__section-img lp-body__section-img--no-mobile-img">
              <img
                loading="lazy"
                src={imageSection4}
                alt="A framework built for the long term"
              />
            </div>
            <h2 className="lp-body__section-title lp-body__section-title--mobile-narrow">
              A framework built for the long term
            </h2>
            <div className="lp-body__section-text">
              <p>
                Childcare is for the long term. And you need a framework you can count on 
                that gives your share long term viability and success. That's why we've 
                defined Hapu around our three tribal principles; clearly defined process,
                transparency over money and equality of participation.
              </p>
            </div>
            <div className="lp-body__section-link">
              <a className="lp-link lp-link--purple" href="/">
                Read how Hapu's tribal background defines our app 
              </a>
            </div>
          </section>
          <div className="lp-body__line-container">
            <div className="common__vertical-line common__vertical-line--margin-80 common__vertical-line--no-margin-mobile" />
          </div>
          <section className="lp-body__section-column lp-body__section-column--no-link">
            <div className="lp-body__section-img">
              <img
                loading="lazy"
                src={imageSection5}
                alt="A framework built for the long term"
              />
            </div>
            <h2 className="lp-body__section-title lp-body__section-title--mobile-narrow">
              Coming soon: Nanny Share Daily Diary!
            </h2>
            <div className="lp-body__section-text">
              <p>
                With the Hapu daily diary your nanny will be able to update you and your
                sharers with photos and commentary of the day. You and sharers will receive
                notifications and you'll be able to login to view the daily adventures fo
                your little ones. We can't wait!
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
