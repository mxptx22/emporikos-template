/** @jsxImportSource @emotion/react */
import tw, { theme, styled } from 'twin.macro'
import React, { useRef, useState, useEffect } from 'react'
import { Header1, Label } from '../../Reusables/headers'
import { Section } from '../../Reusables/layout'

export const TableCell = ({ textHighlight = '', textLabel = '' }) => {
  const TableContainer = styled.div(
    tw`border-b border-primary-700 py-4 w-full md:w-56 h-full`,
  )
  const TableAccent = styled.div(
    tw`text-3xl md:text-7xl font-handwritten sm:leading-[0.8]`,
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
  const [tableLook, setTableLook] = useState('blur(2px)')

  // FIXME Create a custom hook later on
  useEffect(() => {
    const pastTable = tableRef.current.offsetTop - window.innerHeight / 2
    const handleScroll = event => {
      window.scrollY > pastTable
        ? setTableLook('blur(0px)')
        : setTableLook('blur(2px)')
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Section>
      <div ref={tableRef} />
      <Header1>
        <span>Years of Experience</span>
      </Header1>
      <div
        className="grid w-full grid-cols-3 gap-3 text-center mt-6 py-12 place-items-center transition-all duration-1000"
        style={{ filter: tableLook }}
      >
        <TableCell textHighlight="2 mil" textLabel="Clients Worldwide" />
        <TableCell textHighlight="99%" textLabel="Satisfaction Rate" />
        <TableCell textHighlight="8" textLabel="Locations" />
      </div>
    </Section>
  )
}

export default ExpStats
