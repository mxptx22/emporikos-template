import React from 'react'
import Hero1Vid from '../../../Images/hero1vid.mp4'
import { ReactComponent as SmallLogotype } from '../../../Images/agencyidentifier.svg'

function Hero() {
  return (
    <div className="hero">
      <div className="herotextcontainer">
        <h1 className="herosubtitle">Reach New Heights</h1>
        <h1 className="herotitle">with us</h1>
        <SmallLogotype className="small-logotype" />
      </div>
      <div className="herooverlay"></div>
      <video className="herovid" src={Hero1Vid} autoPlay loop muted></video>
    </div>
  )
}

export default Hero
