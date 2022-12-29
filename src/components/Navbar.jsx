import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-items'>
            <a className='logo' href='#'>
                <FontAwesomeIcon icon={faUser} className='logo-icon'/>
                <h1 className='logo-text'>Job<span className='logo-span'>Finder</span></h1>
            </a>
            <div className='buttons'>
                <button className='cta btn-sign-up'>Sign Up</button>
                <button className='cta btn-sign-in'>Sign In</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

