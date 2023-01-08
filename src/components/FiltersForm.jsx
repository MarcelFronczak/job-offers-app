import React, { useState, useRef } from 'react'
import './FiltersForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function FiltersForm() {
    const [levelDivOpen, setLevelDivOpen] = useState(false);
    const [levelFilterArr, setLevelFilterArr] = useState([]);
    const ref = useRef([]);

    function handleLevelDivClick() {
        setLevelDivOpen(!levelDivOpen);
    }
    
    function handleLevelChange(e) {
        if (e.target.checked) {
            setLevelFilterArr(arr => [...arr, e.target.name]);
            
        } else {
            setLevelFilterArr(arr => arr.filter(item => item !== e.target.name))
        }
        console.log(levelFilterArr);
    }

    function handleBtnClick(e) {
        e.preventDefault();
    }

    function handleClearClick(e) {
        e.preventDefault();

        // Unchecking all checkboxes
        for (let i =0; i < ref.current.length; i++) {
            ref.current[i].checked = false;
        }
        // Clearing filters state
        setLevelFilterArr([]);
        console.log(levelFilterArr);
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
                  <input type="checkbox" id="internship" name='internship' ref={(element) => { ref.current[0] = element }}/>
                </label>
                <label onChange={handleLevelChange} value='entry'>
                  Entry
                  <input type="checkbox" id="entry" name='entry' ref={(element) => { ref.current[1] = element }}/>
                </label>
                <label onChange={handleLevelChange} value='mid'>
                  Mid
                  <input type="checkbox" id="mid" name='mid' ref={(element) => { ref.current[2] = element }}/>
                </label>
                <label onChange={handleLevelChange} value='senior'>
                  Senior
                  <input type="checkbox" id="senior" name='senior' ref={(element) => { ref.current[3] = element }}/>
                </label>
                <label onChange={handleLevelChange} value='management'>
                  Management
                  <input type="checkbox" id="management" name='management' ref={(element) => { ref.current[4] = element }}/>
                </label>
              </div>
          </fieldset>
        
        <div className="form-buttons">
            <button className="submit-btn" onClick={handleBtnClick}>Save</button>
            <button className='clear-btn' onClick={handleClearClick}>Clear</button>
        </div>
      </form>
    )
}

export default FiltersForm
