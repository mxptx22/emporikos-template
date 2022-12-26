/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'

import React, { useState, useEffect, useRef } from 'react'
import iPhone from '../../../Images/iphone.png'
import { Header1 } from '../../Reusables/headers'
import { Section } from '../../Reusables/layout'
import { ButtonPrimary } from '../../Reusables/buttons'
import { useScrollEffect } from '../../Reusables/hooks'

function NewAppAttn() {
  const phoneRef = useRef()

  /**
   * @const {string} RevealEffect - The result of the useScrollEffect hook - here it determines the position of the phone frame
   */
  const RevealEffect = useScrollEffect(
    phoneRef,
    'translateX(200%)',
    'translateX(0%)',
  )

  return (
    <Section>
      <Header1 ref={phoneRef}>
        <span>Our Brand New App</span>
      </Header1>
      <div className="flex gap-32">
        <div className="w-full text-justify">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            fugiat accusamus officiis velit officia saepe totam dolor fugit
            libero nobis dolores commodi eaque blanditiis labore, praesentium,
            harum cumque vitae sed reprehenderit esse error aspernatur
            doloremque, odit minus. Quis iure ex exercitationem vitae
            dignissimos molestiae amet, similique culpa animi, mollitia odit est
            corrupti vel minus labore expedita necessitatibus id sit magni!
            Neque fugit nisi nulla tempore beatae voluptates ab. Facere culpa
            officiis esse quidem veniam eum deleniti excepturi mollitia
            voluptatibus est aliquam nesciunt dolorum, quaerat asperiores minus
            assumenda alias voluptatem eligendi pariatur libero maiores adipisci
            reprehenderit consectetur iusto. Eaque, consequatur? Rem.
          </div>
          <ButtonPrimary tw="text-primary-700 my-6">
            <span>Download</span>
          </ButtonPrimary>
        </div>
        <div className="hidden md:block md:w-1/3">
          <img
            src={iPhone}
            style={{ transform: RevealEffect, transition: 'all 1s' }}
          ></img>
        </div>
      </div>
    </Section>
  )
}

export default NewAppAttn
