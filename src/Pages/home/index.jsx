import React from 'react'

import { useRef, useState, useEffect } from 'react'
import Navbar from '../Reusables/navbar'
import Layout from '../Reusables/layout'
import Hero from './Components/hero'
import Recipe from './Components/recipe'
import Appeal from './Components/appeal'
import News from './Components/news'
import ExpStats from './Components/expstats'
import NewAppAttn from './Components/newapp'
import { NavbarStyles } from '../Reusables/navbar'

function Home() {
  const startRef = useRef()
  const [navbarLook, setNavbarLook] = useState(NavbarStyles.condensed)

  useEffect(() => {
    const pastWelcome = startRef.current.offsetTop
    const handleScroll = event => {
      if (window.scrollY < pastWelcome) {
        setNavbarLook(NavbarStyles.condensed)
      }
      if (window.scrollY > pastWelcome) {
        setNavbarLook(NavbarStyles.expanded)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* FIXME Navbar eventually to be contained in Layout */}
      <Navbar passClass={navbarLook} />
      <Layout>
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
