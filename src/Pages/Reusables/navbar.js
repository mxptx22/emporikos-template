/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import { keyframes } from '@emotion/react'
import { globalPaddingVariants } from '../../styles/GlobalStyles'

import React, { useRef, useState } from 'react'
import { ReactComponent as BigLogotype } from '../../Images/AgencynameFullLogo.svg'
import { ALink } from './headers'
import { BsList, BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'

/**
 * @const {Object} NavbarStyles - Upon reaching the trigger point, the navigation bar is meant to change its shape - Here are the defined styles - Make sure that the format stays as that of Twin/Emotion 'css' and that only the 'navigation' id is targeted - We don't want hamburger menu to be affected with the margins or paddings
 * @prop {[]} NavbarStyles.expanded - The styling for the navbar after reaching the trigger point
 * @prop {[]} NavbarStyles.condensed - The styling for the navbar before reaching the trigger point
 */
export const NavbarStyles = {
  expanded: [
    css`
      #navigation {
        ${tw`fixed z-40 min-h-[2rem] bg-neutral-50 py-2 px-4 md:px-16 shadow-md transition-all duration-500 w-full`}
      }
    `,
  ],
  condensed: [
    css`
      #navigation {
        ${tw`fixed z-40 min-h-[2rem] bg-neutral-50 py-2 px-4 shadow-md transition-all duration-500 rounded-xl mt-4 w-[88vw]  ml-[6vw] mr-[6vw]`}
      }
    `,
  ],
}

const NavLink = tw(ALink)`font-normal`

function Navbar() {
  const [bigMenu, determineBigMenu] = useState('no')
  const showBigMenu = () => {
    if (bigMenu === 'no') {
      determineBigMenu('yes')
    }
    if (bigMenu === 'yes') {
      determineBigMenu('no')
    }
  }
  const hamburgerMenuRef = useRef()

  return (
    <>
      {bigMenu === 'yes' && <BigMenu />}
      {/**
       * @see NavbarStyles
       * important to put the id navigation - we don't want to target the hamburger menu (see NavbarStyles)
       */}
      <div id="navigation">
        <div className="flex justify-between items-center p-2 w-full">
          <Link to={'/'}>
            <BigLogotype className="h-8 md:h-9" />
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to={'/'}>
              <NavLink>Home</NavLink>
            </Link>
            <Link to={'/about'}>
              <NavLink>About</NavLink>
            </Link>
            <Link to={'/services'}>
              <NavLink>Services</NavLink>
            </Link>
            <a href="#contact-container">
              <NavLink>Contact</NavLink>
            </a>
          </div>
          <div
            ref={hamburgerMenuRef}
            className="inline-block md:hidden text-4xl cursor-pointer"
            onClick={() => {
              showBigMenu()
            }}
          >
            {bigMenu === 'no' && <BsList className="" />}
            {bigMenu === 'yes' && <BsX className="" />}
          </div>
        </div>
      </div>
    </>
  )
}

function BigMenu() {
  const HMenuBackdropBlur = keyframes`
  from {
${tw`bg-neutral-200/10 backdrop-blur-0`}
  }
  to {
${tw`bg-neutral-200/40 backdrop-blur-lg`}
  }
`

  const HMenuContainerDrop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`

  const HMenuBackdrop = [
    tw`fixed z-20 w-screen h-screen bg-neutral-200/40 backdrop-blur-lg`,
    css`
      animation: ${HMenuBackdropBlur} 0.5s;
    `,
  ]

  const HMenuContainer = [
    tw`w-full h-2/3 bg-neutral-100/80 rounded-b-md`,
    css`
      animation: ${HMenuContainerDrop} 0.5s;
    `,
  ]

  return (
    <>
      <div css={HMenuBackdrop}>
        <div css={HMenuContainer}>
          <div className="flex flex-col items-center justify-center pt-24 text-3xl gap-5 h-full">
            <Link to={'/'}>
              <ALink>Home</ALink>
            </Link>
            <Link to={'/about'}>
              <ALink>About</ALink>
            </Link>
            <Link to={'/services'}>
              <ALink>Services</ALink>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
