import React, { useState, useEffect, useRef } from 'react'
import iPhone from '../../../Images/iphone.png'

function NewAppAttn() {
  const phoneRef = useRef()
  const [phoneLook, setPhoneLook] = useState('translateX(200%)')

  useEffect(() => {
    const pastApp = phoneRef.current.offsetTop * 0.7
    const handleScroll = event => {
      if (window.scrollY > pastApp) {
        setPhoneLook('translateX(0%)')
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {' '}
      <h1 ref={phoneRef} className="accentheader">
        Our Brand New App
      </h1>
      <div className="twowing-container">
        <div className="fifty flex-column">
          <p>
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
          </p>
          <button className="button-download">Download</button>
        </div>
        <div className="fifty al-right hidden">
          <img
            src={iPhone}
            style={{ transform: phoneLook, transition: 'all 1s' }}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default NewAppAttn
