import React, { useState } from 'react'
import './Sidebar.css'

function Sidebar() {
    const [search, setSearch] = useState('');

    function handleChange(e) {
        setSearch(e.target.value);
        console.log(search);
    }

  return (
    <sidebar>
      <div className='filters-div'>
            <input
                value={search}
                onChange={handleChange}
                type='text'
                className='searchbar'
                placeholder='Search for jobs...'>
            </input>
        <div className='filters'></div>
      </div>
    </sidebar>
  )
}

export default Sidebar
