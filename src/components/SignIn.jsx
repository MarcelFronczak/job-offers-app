import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { GoogleButton } from 'react-google-button'
import './SignIn.css'

function SignIn() {
  return (
    <div className="signin-page">
      <nav className='navbar'>
        <Link to='/job-offers-app' style={{ textDecoration: 'none' }}>
          <a className='logo' href='#'>
              <FontAwesomeIcon icon={faUser} className='logo-icon'/>
              <h1 className='logo-text'>Job<span className='logo-span'>Finder</span></h1>
          </a>
        </Link>
      </nav>
      <div className="signin-form">
        <h1>Sign In</h1>
        { /*GoogleBtn */ }
        <GoogleButton className='google-btn'/>
      </div>
    </div>
  )
}

export default SignIn
