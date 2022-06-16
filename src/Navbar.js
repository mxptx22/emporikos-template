import React, { useRef, useState } from 'react'
import BigMenu from './BigMenu';
import { ReactComponent as BigLogotype} from './Images/agencylogotype.svg';

function Navbar(props) {
  const [bigMenu, determineBigMenu] = useState('no')
  const showBigMenu = (() => {
    if (bigMenu === 'no') {
      determineBigMenu('yes')
    }
    if (bigMenu === 'yes') {determineBigMenu('no')}
  })
  const hamburgerMenuRef = useRef()

  return (
    <>
      {bigMenu === 'yes' && <BigMenu/>}
      <div className={props.passClass}>
        <div><BigLogotype className='navbar-logotype' /></div>
        <div className='navbar-text'>
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Services</div>
            <div className="">Contact</div>
        </div>
        <div ref={hamburgerMenuRef} className='hamburger-menu' onClick={() => {showBigMenu()}}>
          {bigMenu === 'no' && <span>≡</span>}
          {bigMenu === 'yes' && <span>×</span>}
        </div>
    </div>
    </>
  )
}

export default Navbar