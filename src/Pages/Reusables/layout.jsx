/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import { globalPaddingVariants } from '../../styles/GlobalStyles'
import React from 'react'
import Contact from './contact'

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

function Layout({ children }) {
  return (
    <div className="w-screen overflow-hidden" css={globalPaddingVariants.class}>
      {children}
      <Contact />
    </div>
  )
}

export default Layout
