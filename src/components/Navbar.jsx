import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Navbar({ setFilter }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleClick = () => {
    setOpen(!open);
    console.log({open})
  }

  function handleChange(e) {
      setSearch(e.target.value);
      setFilter(e.target.value);
      console.log(search);
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
                {
                  open ? 
                    <FontAwesomeIcon icon={faXmark} className='xmark' onClick={handleClick} />
                    : <FontAwesomeIcon icon={faBars} className='bars' onClick={handleClick} />
                }
              </div>
          </div>
      </nav>
      <aside className='sidebar'>
        <div className="sidebar-content">
          <div className='filters-div'>
                <input
                    value={search}
                    onChange={handleChange}
                    type='text'
                    className='searchbar'
                    placeholder='Search for jobs...'
                    spellCheck='false'>
                </input>
            <div className='filters'></div>
          </div>
          <div className="icons-container">
            <a target='_blank' href="https://www.facebook.com/" className='social-icon'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a target='_blank' href="https://twitter.com/" className='social-icon'><FontAwesomeIcon icon={faTwitter} /></a>
            <a target='_blank' href="https://www.linkedin.com/" className='social-icon'><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
    </aside>
    {open && (
      <aside className='sidebar-mobile'>
        <div className="sidebar-content">
          <div className='filters-div'>
                <input
                    value={search}
                    onChange={handleChange}
                    type='text'
                    className='searchbar'
                    placeholder='Search for jobs...'
                    spellCheck='false'>
                </input>
            <div className='filters'></div>
          </div>
          <div className="icons-container">
            <a target='_blank' href="https://www.facebook.com/" className='social-icon'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a target='_blank' href="https://twitter.com/" className='social-icon'><FontAwesomeIcon icon={faTwitter} /></a>
            <a target='_blank' href="https://www.linkedin.com/" className='social-icon'><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </aside>
      )
    }
    </>
  )
}

export default Navbar

