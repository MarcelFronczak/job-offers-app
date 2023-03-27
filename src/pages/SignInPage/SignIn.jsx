import React from 'react'
import { useState, useEffect } from 'react'
import './SignIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../context/AuthContext';

function SignIn() {
  const [loaded, setLoaded] = useState(false);
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(user != null) {
      navigate('/job-offers-app');
    }
  }, [user])

  const xMarkStyle = {
    textDecoration: 'none',
    position: 'absolute',
    top: '18px',
    right: '28px',
    color: '#A3A8C1',
    fontSize: '19px'
  }
    
  return (
    <div className="signin-page">
      <nav className='navbar'>
        <Link to='/job-offers-app' style={{ textDecoration: 'none' }}>
          <a className='logo' href=''>
              <FontAwesomeIcon icon={faUser} className='logo-icon'/>
              <h1 className='logo-text'>Job<span className='logo-span'>Finder</span></h1>
          </a>
        </Link>
      </nav>
      <div className={loaded ? 'signin-form active' : 'signin-form'}>
        <Link to='/job-offers-app' style={xMarkStyle}><FontAwesomeIcon icon={faXmark} className='x'/></Link>
        <h1>Sign In</h1>
        <GoogleButton className='google-btn' onClick={handleGoogleSignIn}/>
      </div>
    </div>
  )
}

export default SignIn
