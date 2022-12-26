import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Layout from '../Reusables/layout'
import Hero from './Components/hero'
import Recipe from './Components/recipe'
import Appeal from './Components/appeal'
import News from './Components/news'
import ExpStats from './Components/expstats'
import NewAppAttn from './Components/newapp'

function Home() {
  /**
   * @const {MutableRefObject<undefined>} startRef - Trigger point for Navbar to expand
   *
   * - [MEMO] You will see two startRef's -> One is attached to the relevant element just before Hero, and the other is the 'trigger' prop being passed to Layout
   */
  const startRef = useRef()

  return (
    <>
      <Layout trigger={startRef}>
        <Hero />
        <div ref={startRef}>{/* DIV for your navbar to change shape */}</div>
        <Recipe />
        <NewAppAttn />
        <ExpStats />
        <News />
        <Appeal />
      </Layout>
    </>
  )
}

export default Home
