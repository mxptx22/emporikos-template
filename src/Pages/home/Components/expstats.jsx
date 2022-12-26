/** @jsxImportSource @emotion/react */
import tw, { theme, styled } from 'twin.macro'
import React, { useRef, useState, useEffect } from 'react'
import { Header1, Label } from '../../Reusables/headers'
import { Section } from '../../Reusables/layout'
import { useScrollEffect } from '../../Reusables/hooks'

export const TableCell = ({ textHighlight = '', textLabel = '' }) => {
  const TableContainer = styled.div(
    tw`border-b border-primary-700 py-4 w-full md:w-56 h-full`,
  )
  const TableAccent = styled.div(
    tw`text-3xl md:text-7xl font-handwritten text-black/80 sm:leading-[0.8]`,
  )
  return (
    <TableContainer>
      <TableAccent>{textHighlight}</TableAccent>
      <Label tw="text-xs md:text-xl">{textLabel}</Label>
    </TableContainer>
  )
}

function ExpStats() {
  const tableRef = useRef()
  /**
   * @const {string} RevealEffect - The result of the useScrollEffect hook - here it determines the intensity of the blur effect
   */
  const RevealEffect = useScrollEffect(tableRef, 'blur(2px)', 'blur(0px)')

  return (
    <Section>
      <div ref={tableRef} />
      <Header1>
        <span>Years of Experience</span>
      </Header1>
      <div
        className="grid w-full grid-cols-3 gap-3 text-center my-6 md:mb-8 md:mt-16 place-items-center transition-all duration-1000"
        style={{ filter: RevealEffect }}
      >
        <TableCell textHighlight="2 mil" textLabel="Clients Worldwide" />
        <TableCell textHighlight="99%" textLabel="Satisfaction Rate" />
        <TableCell textHighlight="8" textLabel="Locations" />
      </div>
    </Section>
  )
}

export default ExpStats
