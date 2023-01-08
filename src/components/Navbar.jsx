import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faXmark, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function Navbar({ setFilter }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [levelDivOpen, setLevelDivOpen] = useState(false);
  const [levelFilters, setLevelFilters] = useState([]);

  const handleClick = () => {
    setOpen(!open);
    console.log({open})
  }

  function handleChange(e) {
      setSearch(e.target.value);
      setFilter(e.target.value);
      console.log(search);
  }

  function handleLevelDivClick() {
    setLevelDivOpen(!levelDivOpen);
  }

  function handleLevelChange(e) {
    
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

            <form className='filters-form'>

              <fieldset className='level-container'>
                <div className='level-toggle-div' onClick={handleLevelDivClick}>
                  <p>Experience level</p>
                  {levelDivOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </div>
                <div className={levelDivOpen ? 'list-visible' : 'list-not-visible'}>
                    <label onChange={handleLevelChange} value='internship'>
                      Internship
                      <input type="checkbox" id="internship" name='internship'/>
                    </label>
                    <label onChange={handleLevelChange} value='entry'>
                      Entry
                      <input type="checkbox" id="entry" name='entry'/>
                    </label>
                    <label onChange={handleLevelChange} value='mid'>
                      Mid
                      <input type="checkbox" id="mid" name='mid'/>
                    </label>
                    <label onChange={handleLevelChange} value='senior'>
                      Senior
                      <input type="checkbox" id="senior" name='senior'/>
                    </label>
                    <label onChange={handleLevelChange} value='management'>
                      Management
                      <input type="checkbox" id="management" name='management'/>
                    </label>
                  </div>
              </fieldset>

            </form>

          </div>
          <div className="icons-container">
            <a href="#" className='social-icon'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a target='_blank' href="https://github.com/MarcelFronczak?tab=repositories" className='social-icon'><FontAwesomeIcon icon={faGithub} /></a>
            <a target='_blank' href="https://www.linkedin.com/in/marcel-fronczak-88523022b/" className='social-icon'><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
    
    </aside>
      {/* Mobile sidebar */}
      <aside className={open ? 'sidebar-mobile' : 'sidebar-mobile-hidden'}>
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
            <form className='filters-form'>
             <fieldset className='level-container'>
                <div className='level-toggle-div' onClick={handleLevelDivClick}>
                  <p>Experience level</p>
                  {levelDivOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </div>

                  <div className={levelDivOpen ? 'list-visible' : 'list-not-visible'}>
                  <label onChange={handleLevelChange} value='internship'>
                      Internship
                      <input type="checkbox" id="internship" name='internship'/>
                    </label>
                    <label onChange={handleLevelChange} value='entry'>
                      Entry
                      <input type="checkbox" id="entry" name='entry'/>
                    </label>
                    <label onChange={handleLevelChange} value='mid'>
                      Mid
                      <input type="checkbox" id="mid" name='mid'/>
                    </label>
                    <label onChange={handleLevelChange} value='senior'>
                      Senior
                      <input type="checkbox" id="senior" name='senior'/>
                    </label>
                    <label onChange={handleLevelChange} value='management'>
                      Management
                      <input type="checkbox" id="management" name='management'/>
                    </label>
                  </div>
              
              </fieldset>

            </form>
          </div>
          <div className="icons-container">
            <a href="#" className='social-icon'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a target='_blank' href="https://github.com/MarcelFronczak?tab=repositories" className='social-icon'><FontAwesomeIcon icon={faGithub} /></a>
            <a target='_blank' href="https://www.linkedin.com/in/marcel-fronczak-88523022b/" className='social-icon'><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </aside>
      )
    </>
  )
}

export default Navbar

