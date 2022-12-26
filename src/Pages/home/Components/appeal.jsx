/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'
import React from 'react'
import { Subheader1 } from '../../Reusables/headers'
import { Section } from '../../Reusables/layout'

const Subheader2 = tw(Subheader1)`text-center text-primary-700`

function Appeal() {
  return (
    <Section>
      <Subheader2>Any other way we can help?</Subheader2>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        excepturi facilis accusantium odit dicta? Aperiam soluta veritatis
        ratione? Reiciendis officia ipsam esse recusandae, cupiditate maiores
        deserunt autem, quod quisquam vitae inventore voluptas porro optio
        commodi veritatis voluptates similique. Earum perferendis maiores
        pariatur consectetur nostrum tempore aspernatur autem, cumque iste
        corporis.
      </p>
    </Section>
  )
}

export default Appeal
