/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import React from 'react'
import { globalPaddingVariants } from '../../styles/GlobalStyles'
import { NavbarStyles } from '../Reusables/navbar'
import { useScrollEffect } from './hooks'
import Contact from './contact'
import Navbar from './navbar'

export function Section({ children }) {
  const ptOffset = [
    tw`py-8 sm:py-10 md:py-14`,
    css`
      & > *:first-child {
        padding-top: 0;
        margin-top: 0;
      }
    `,
  ]

  return <div css={ptOffset}>{children}</div>
}

/**
 * @param {Object} props - React Component Props
 * @param {React.ReactNode} props.children - All children nodes contained under the layout
 * @param {MutableRefObject<undefined>} props.trigger - The ref element used as reference for trigger point
 */
function Layout({ children, trigger }) {
  /**
   * @const {string} RevealEffect - The result of the useScrollEffect hook - here it determines the style of the navbar dependent on scrolling behaviour
   */
  const RevealEffect = useScrollEffect(
    trigger,
    NavbarStyles.condensed,
    NavbarStyles.expanded,
  )

  return (
    <>
      <div className={RevealEffect}>
        <Navbar />
      </div>
      <div
        className="w-screen overflow-hidden"
        css={globalPaddingVariants.class}
      >
        {children}
        <Contact />
      </div>
    </>
  )
}

export default Layout
