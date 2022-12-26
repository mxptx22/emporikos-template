import React, { useState, useEffect } from 'react'

/**
 * @param {React.MutableRefObject<undefined>} refElement The ref element used as reference for trigger point
 * @param {string} stateBefore The desired style (as string) before reaching the trigger point
 * @param {string} stateAfter The desired style (as string) upon reaching the trigger point
 */
export function useScrollEffect(refElement, stateBefore, stateAfter) {
  const [currentLook, newLook] = useState(stateBefore)

  useEffect(() => {
    const pastRef = refElement.current.offsetTop - window.innerHeight / 2
    const handleScroll = event => {
      window.scrollY > pastRef ? newLook(stateAfter) : newLook(stateBefore)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return currentLook
}

// Graveyard

// From newapp.jsx
// const [phoneLook, setPhoneLook] = useState('translateX(200%)')

// useEffect(() => {
//   const pastApp = phoneRef.current.offsetTop - window.innerHeight / 2
//   const handleScroll = event => {
//     window.scrollY > pastApp
//       ? setPhoneLook('translateX(0%)')
//       : setPhoneLook('translateX(200%)')
//   }
//   window.addEventListener('scroll', handleScroll)
// }, [])

// From expstats.jsx
// const [tableLook, setTableLook] = useState('blur(2px)')

// useEffect(() => {
//   const pastTable = tableRef.current.offsetTop - window.innerHeight / 2
//   const handleScroll = event => {
//     window.scrollY > pastTable
//       ? setTableLook('blur(0px)')
//       : setTableLook('blur(2px)')
//   }
//   window.addEventListener('scroll', handleScroll)
// }, [])

// From index.jsx - Navbar
// const [navbarLook, setNavbarLook] = useState(NavbarStyles.condensed)

// useEffect(() => {
//   const pastWelcome = startRef.current.offsetTop
//   const handleScroll = event => {
//     if (window.scrollY < pastWelcome) {
//       setNavbarLook(NavbarStyles.condensed)
//     }
//     if (window.scrollY > pastWelcome) {
//       setNavbarLook(NavbarStyles.expanded)
//     }
//   }
//   window.addEventListener('scroll', handleScroll)
// }, [])
