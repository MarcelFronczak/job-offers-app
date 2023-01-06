import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
                <FontAwesomeIcon icon={faBars} className='bars' onClick={handleClick} />
              </div>
          </div>
      </nav>
      <aside className='sidebar'>
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
    </aside>
    {open && (
      <aside className='sidebar-mobile'>
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
      </aside>
      )
    }
    </>
  )
}

export default Navbar

