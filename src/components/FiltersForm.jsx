import React, { useState, useRef } from 'react'
import './FiltersForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function FiltersForm({ setLevel }) {
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
    }

    function handleSaveClick(e) {
        e.preventDefault();

        setLevel(levelFilterArr.join(''));
    }

    function handleClearClick(e) {
        e.preventDefault();

        // Unchecking all checkboxes
        for (let i =0; i < ref.current.length; i++) {
            ref.current[i].checked = false;
        }
        // Clearing filters states
        setLevelFilterArr('')
        setLevel('');
    }

    return (
      <form className='filters-form'>
          <fieldset className='level-container'>
            <div className='level-toggle-div' onClick={handleLevelDivClick}>
              <p>Experience level</p>
              {levelDivOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              {levelFilterArr.length != 0 && <p className='counter'>{levelFilterArr.length}</p>}
            </div>
            <div className={levelDivOpen ? 'list-visible' : 'list-not-visible'}>
                <label onChange={handleLevelChange} value='Internship&'>
                  Internship
                  <input type="checkbox" id="internship" name='level=Internship&' ref={(element) => { ref.current[0] = element }}/>
                </label>
                <label onChange={handleLevelChange} value='Entry%20Level&'>
                  Entry
                  <input type="checkbox" id="entry" name='level=Entry%20Level&' ref={(element) => { ref.current[1] = element }}/>
                </label>
                <label onChange={handleLevelChange} value='Mid%20Level&'>
                  Mid
                  <input type="checkbox" id="mid" name='level=Mid%20Level&' ref={(element) => { ref.current[2] = element }}/>
                </label>
                <label onChange={handleLevelChange} value='Senior%20Level&'>
                  Senior
                  <input type="checkbox" id="senior" name='level=Senior%20Level&' ref={(element) => { ref.current[3] = element }}/>
                </label>
                <label onChange={handleLevelChange} value='management'>
                  Management
                  <input type="checkbox" id="management" name='level=management' ref={(element) => { ref.current[4] = element }}/>
                </label>
              </div>
          </fieldset>
        
        <div className="form-buttons">
            <button className="submit-btn" onClick={handleSaveClick}>Save</button>
            <button className='clear-btn' onClick={handleClearClick}>Clear</button>
        </div>
      </form>
    )
}

export default FiltersForm
