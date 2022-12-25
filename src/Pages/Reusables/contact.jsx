/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from 'twin.macro'
import { globalPaddingVariants } from '../../styles/GlobalStyles'
import { Header1, Label, Subheader1 } from './headers'
import { Section } from './layout'
import { ButtonPrimary, ButtonSocial } from './buttons'

import { BsFillTelephoneFill, BsTwitter, BsFacebook } from 'react-icons/bs'
import { MdOutlineLocationCity } from 'react-icons/md'
import { GrFacebook } from 'react-icons/gr'

import React from 'react'

function Contact() {
  const ContainerX = tw`w-screen bg-gradient-to-bl from-primary-800 to-primary-600 text-white`
  const HeaderX = tw(Header1)`bg-primary-600 text-white`
  const ButtonAdjustments = [
    css`
      &:hover > * {
        ${tw`text-primary-700`}
      }
    `,
    tw`my-3`,
  ]

  return (
    <div css={[globalPaddingVariants.classOffset, ContainerX]}>
      <Section>
        <HeaderX>
          <span>Contact</span>
        </HeaderX>
        <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
          <div className="w-full">
            <Subheader1 tw="hidden md:block">Let's Get in Touch</Subheader1>
            <div className="flex w-full justify-between md:flex-col">
              <div>
                <div id="phone" className="relative h-fit pb-6 mb-4">
                  <Label>Call Us at</Label>
                  <div className=" text-3xl md:text-4xl tracking-wider">
                    0123456789
                  </div>
                  <div className="absolute text-6xl bottom-0 left-0 md:-left-6 opacity-25">
                    <BsFillTelephoneFill />
                  </div>
                </div>
                <div id="address" className="relative h-fit pb-6 mb-4">
                  <Label>Somecity IX 4AV</Label>
                  <div className="text-3xl md:text-4xl tracking-wide">
                    123 Somelane
                  </div>
                  <div className="absolute text-6xl bottom-0 left-0 md:-left-6 opacity-25">
                    <MdOutlineLocationCity />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-min pr-4 md:pr-0 justify-center md:justify-start gap-3">
                <ButtonSocial css={ButtonAdjustments}>
                  <GrFacebook />
                </ButtonSocial>
                <ButtonSocial css={ButtonAdjustments}>
                  <BsTwitter />
                </ButtonSocial>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Subheader1>Contact Form</Subheader1>
            <form className="flex flex-col gap-2 w-full xl:w-3/4">
              <Label>Name</Label>
              <input />
              <Label>E-mail</Label>
              <input />
              <Label>Message</Label>
              <textarea />
              <ButtonPrimary css={ButtonAdjustments}>
                <span>Send</span>
              </ButtonPrimary>
            </form>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact
