import React, { useState } from 'react'
import './Navbar.css'
import FiltersForm from './FiltersForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faXmark, faCircleUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Navbar({ setSearchbarFilter, setLevel, signInAlert, setSignInAlert }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { user, logOut } = UserAuth();
  const [userBtnOpen, setUserBtnOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  const handleChange = (e) => {
      setSearch(e.target.value);
      setSearchbarFilter(e.target.value);
  }

  const handleUserBtnClick = () => {
    setUserBtnOpen(!userBtnOpen);
  }

  const handleAlertClose = () => {
    setSignInAlert(false);
  }

  const truncateName = (name) => {
    var names = name.split(/\s+/);

    names[1] = names[1].substr(0, 1) + ".";

    var name_abbr = names.join(' ');
    return name_abbr;
  }

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error)
    }
  }

  const handleNoFunction = () => {
    alert('Function to be added soon ;)');
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
                      user?.displayName ? (
                        <div className="user-container">

                            <button className='user-account-btn' onClick={handleUserBtnClick}>
                              
                              <FontAwesomeIcon icon={faCircleUser} className='user-btn-icon' />
                              <p className="user-name-btn">{truncateName(user.displayName)}</p>
                              {userBtnOpen ? <FontAwesomeIcon icon={faChevronUp} className='chevron-user' /> : <FontAwesomeIcon icon={faChevronDown} className='chevron-user'/> }
                            </button>
                            {userBtnOpen && (
                              <div className="user-account-details">
                                <div className="user-data-container">
                                <FontAwesomeIcon icon={faCircleUser} className='user-btn-icon user-icon-big' />
                                <div className="user-data-details">
                                  <h4 className="user-name">{user.displayName}</h4>
                                  <p className="user-email">{user.email}</p>
                                </div>
                              </div>
                                <ul>
                                  <li onClick={handleNoFunction}>Saved offers</li>
                                  <li onClick={handleSignOut}>Log out</li>
                                </ul>
                              </div>
                            )}
                        </div>
                      ) : (
                        <div className='sign-in-wrap'>
                          <Link onClick={() => setSignInAlert(false)} to='/job-offers-app/signin' style={{textDecoration: 'none'}}><button className='cta btn-sign-in'>Sign In</button></Link>
                          {signInAlert && 
                            <div className="sign-in-alert">
                              <FontAwesomeIcon icon={faXmark} className='xmark-alert' onClick={handleAlertClose}/>
                              <span className="arrow"></span>
                              <p>Sign in to save this offer</p>
                            </div>
                          }
                        </div>
                      )
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

