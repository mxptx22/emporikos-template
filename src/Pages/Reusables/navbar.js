/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import { keyframes } from '@emotion/react'

import React, { useRef, useState } from 'react'
import { ReactComponent as BigLogotype } from '../../Images/AgencynameFullLogo.svg'
import { ALink } from './headers'
import { BsList, BsX } from 'react-icons/bs'

export const NavbarStyles = {
  expanded:
    'fixed z-40 min-h-[2rem] bg-neutral-50 py-2 px-4 md:px-16 shadow-md transition-all duration-500 w-screen',
  condensed:
    'fixed z-40 min-h-[2rem] bg-neutral-50 py-2 px-4 shadow-md transition-all duration-500 rounded-md mt-4 w-[88vw]  ml-[6vw] mr-[6vw] ',
}

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
      {/* <div className={passClass}> */}
      <div className="flex justify-between items-center p-2 w-full">
        <BigLogotype className="h-8 md:h-9" />

        <div className="hidden md:flex gap-6">
          <ALink>Home</ALink>
          <ALink>About</ALink>
          <ALink>Services</ALink>
          <ALink>Contact</ALink>
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
      {/* </div> */}
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
            <ALink>Home</ALink>
            <ALink>About</ALink>
            <ALink>Services</ALink>
            <ALink>Contact</ALink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
