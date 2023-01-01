import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';

function Navbar() {
  const [barsClicked, setBarsClicked] = useState(false);

  const handleClick = () => {
    setBarsClicked(!barsClicked);
  }

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-items'>
              <a className='logo' href='#'>
                  <FontAwesomeIcon icon={faUser} className='logo-icon'/>
                  <h1 className='logo-text'>Job<span className='logo-span'>Finder</span></h1>
              </a>
              <div className='nav-btns'>
                <div className='buttons'>
                    <button className='cta btn-sign-up'>Sign Up</button>
                    <button className='cta btn-sign-in'>Sign In</button>
                </div>
                <FontAwesomeIcon icon={faBars} className='bars' onClick={handleClick} />
              </div>
          </div>
      </nav>
      <Sidebar />
    </>
  )
}

export default Navbar

