import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function FiltersForm() {
    const [levelDivOpen, setLevelDivOpen] = useState(false);
    function handleLevelDivClick() {
        setLevelDivOpen(!levelDivOpen);
    }
    
    function handleLevelChange(e) {
        
    }

    return (
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
    )
}

export default FiltersForm
