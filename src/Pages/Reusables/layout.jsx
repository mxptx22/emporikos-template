/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import { globalPadding, globalPaddingVariants } from '../../styles/GlobalStyles'
import React from 'react'
import Contact from './contact'

export function Section({ children }) {
  const ptOffset = [
    tw`py-14`,
    css`
      & > *:first-child {
        padding-top: 0;
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
