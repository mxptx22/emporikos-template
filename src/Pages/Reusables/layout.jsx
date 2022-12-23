import React from 'react'
import Contact from './contact'

function Layout({ children }) {
  return (
    <div className="pagecontainer">
      {children}
      <Contact />
    </div>
  )
}

export default Layout
