/** @jsxImportSource @emotion/react */
import tw, { css, styled, theme } from 'twin.macro'
import React, { useRef, useState, useEffect } from 'react'
import { Header1, Label } from '../../Reusables/headers'
import { Section } from '../../Reusables/layout'

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

  const TableCell = styled.div([tw`border-b border-primary-700 py-4 w-56`])
  const TableCellAccent = tw`text-7xl font-handwritten leading-[0.8]`

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
        <TableCell>
          <div css={TableCellAccent}>2 mil</div>
          <Label>Clients Worldwide</Label>
        </TableCell>
        <TableCell>
          <div css={TableCellAccent}>99%</div>
          <Label>Satisfaction Rate</Label>
        </TableCell>
        <TableCell>
          <div css={TableCellAccent}>8</div>
          <Label>Locations</Label>
        </TableCell>
      </div>
    </Section>
  )
}

export default ExpStats
