/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import { keyframes } from '@emotion/react'

import React from 'react'
import { globalPaddingVariants } from '../../../styles/GlobalStyles'
import Hero1Vid from '../../../Images/hero1vid.mp4'
import { ReactComponent as SmallLogotype } from '../../../Images/agencyidentifier.svg'

function Hero() {
  return (
    <div
      css={globalPaddingVariants.classCover}
      className="h-screen md:h-[75vh] object-cover relative"
    >
      <video
        className="h-full w-full object-cover absolute"
        src={Hero1Vid}
        autoPlay
        loop
        muted
      ></video>
      <div className="bg-secondary-600/50 h-full w-full absolute backdrop-blur-sm overflow-hidden">
        <div className="h-3/4 w-full text-white text-center absolute bottom-0 flex flex-col justify-center md:justify-end items-center gap-4 md:gap-12 p-8">
          <div className="text-2xl md:text-5xl uppercase tracking-widest font-light">
            We are the
          </div>
          <div className="text-7xl md:text-9xl leading-snug md:leading-none font-handwritten">
            digital trailblazers.
          </div>
        </div>
      </div>
    </div>
  )
}

const OldHero = () => {
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
