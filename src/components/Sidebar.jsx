import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <sidebar>
      <div className='filters-div'>
        <input type='text' className='searchbar' placeholder='Search for jobs...'></input>
        <div className='filters'></div>
      </div>
    </sidebar>
  )
}

export default Sidebar
