import React from 'react'
import { useState, useEffect } from 'react'
import './SignIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { GoogleButton } from 'react-google-button'

function SignIn() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

    const xMarkStyle = {
        textDecoration: 'none',
        position: 'absolute',
        top: '18px',
        right: '28px',
        color: '#A3A8C1',
        fontSize: '19px'
    }

    const GoogleClick = () => {
      alert("Function will be added soon ;)")
    }
    
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
      <div className={loaded ? 'signin-form active' : 'signin-form'}>
        <Link classname='xmark-link' to='/job-offers-app' style={xMarkStyle}><FontAwesomeIcon icon={faXmark} classname='x'/></Link>
        <h1>Sign In</h1>
        <GoogleButton className='google-btn' onClick={GoogleClick}/>
      </div>
    </div>
  )
}

export default SignIn
