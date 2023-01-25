import React, { useState } from 'react'
import './Navbar.css'
import FiltersForm from './FiltersForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Navbar({ setSearchbarFilter, setLevel }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { user, logOut } = UserAuth();

  const handleClick = () => {
    setOpen(!open);
  }

  function handleChange(e) {
      setSearch(e.target.value);
      setSearchbarFilter(e.target.value);
  }

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-items'>
              <Link to="/job-offers-app" style={{ textDecoration: 'none' }}>
              <a className='logo' href='#'>
                  <FontAwesomeIcon icon={faUser} className='logo-icon'/>
                  <h1 className='logo-text'>Job<span className='logo-span'>Finder</span></h1>
              </a>
              </Link>
              <div className='nav-btns'>
                <div className='buttons'>
                    {
                      user?.displayName ? (<button onClick={handleSignOut} className='cta btn-sign-out'>Sign Out</button>)
                      : (<Link to='/job-offers-app/signin' style={{textDecoration: 'none'}}><button className='cta btn-sign-in'>Sign In</button></Link>)
                    }
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
            <div className="searchbar-shadow-wrap">
                <input
                    value={search}
                    onChange={handleChange}
                    type='text'
                    className='searchbar'
                    placeholder='Search for jobs...'
                    spellCheck='false'>
                </input>
              </div>
            <FiltersForm setLevel={setLevel}/>
          </div>
          <div className="icons-container">
            <a href="#" className='social-icon'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a target='_blank' href="https://github.com/MarcelFronczak?tab=repositories" className='social-icon'><FontAwesomeIcon icon={faGithub} /></a>
            <a target='_blank' href="https://www.linkedin.com/in/marcel-fronczak-88523022b/" className='social-icon'><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
    </aside>
      {/* Mobile sidebar */}
      <aside className={open ? 'sidebar-mobile' : 'sidebar-mobile hidden'}>
        <div className="sidebar-content">
          <div className='filters-div'>
            <div className="searchbar-shadow-wrap">
              <input
                  value={search}
                  onChange={handleChange}
                  type='text'
                  className='searchbar'
                  placeholder='Search for jobs...'
                  spellCheck='false'>
              </input>
            </div>
            <FiltersForm setLevel={setLevel} open={open} setOpen={setOpen} />
          </div>
          <div className="icons-container">
            <a href="#" className='social-icon'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a target='_blank' href="https://github.com/MarcelFronczak?tab=repositories" className='social-icon'><FontAwesomeIcon icon={faGithub} /></a>
            <a target='_blank' href="https://www.linkedin.com/in/marcel-fronczak-88523022b/" className='social-icon'><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar

