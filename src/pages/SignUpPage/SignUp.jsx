import React from 'react';
import { useState, useEffect } from 'react';
import './SignUp.css';
import GoogleIcon from '../../assets/icon-google.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const { createUser, googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, [])

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Email validation
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    // Password validation
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password);
    navigate('/job-offers-app');
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/job-offers-app');
    } catch (error) {
      console.log(error)
    }
  }

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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className='user_form'>
          <div className="name_container">
            <label htmlFor="name">Full name</label>
            <input type="text" id='name' placeholder='Full name' onChange={handleNameChange} />
          </div>
          <div className="email_container">
            <label htmlFor="email">Email address</label>
            <input type="email" id='email' placeholder='Email address' onChange={handleEmailChange} />
          </div>
          <div className="password_container">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Password' onChange={handlePasswordChange} />
          </div>
          <button className='sign_in_button'>Sign up</button>
        </form>
        <div className="separator">
          <span className="line"></span>
          or
          <span className="line"></span>
        </div>
        <button className='google_button' onClick={handleGoogleSignIn}>
          <div className='google_button_content'>
            <img src={GoogleIcon} alt="" />
            <p>Sign in with Google</p>
          </div>
        </button>
        <p className='redirect_text'>Have an account? <Link to='/job-offers-app/signin' className='redirect_link' >Sign in</Link></p>
      </div>
    </div>
  )
}

export default SignUp