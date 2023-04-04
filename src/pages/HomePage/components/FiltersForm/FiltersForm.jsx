import React, { useState, useRef, useContext } from 'react'
import './FiltersForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FiltersContext } from '../../../../context/FiltersContext';

function FiltersForm({ open, setOpen}) {
    const [levelDivOpen, setLevelDivOpen] = useState(false);
    const [categoryDivOpen, setCategoryDivOpen] = useState(false);
    const [levelFilterArr, setLevelFilterArr] = useState([]);
    const [categoryFilterArr, setCategoryFilterArr] = useState([]);
    const { filters, setFilters } = useContext(FiltersContext);
    const refLevel = useRef([]);
    const refCategory = useRef([]);

    function handleLevelDivClick() {
        setLevelDivOpen(!levelDivOpen);
    }

    function handleCategoryDivClick() {
      setCategoryDivOpen(!categoryDivOpen);
  }
    
    // pushing level filter value to array
    function handleLevelChange(e) {
        e.target.checked ? setLevelFilterArr(arr => [...arr, e.target.name]) : setLevelFilterArr(arr => arr.filter(item => item !== e.target.name));
    }

    function handleCategoryChange(e) {
      e.target.checked ? setCategoryFilterArr(arr => [...arr, e.target.name]) : setCategoryFilterArr(arr => arr.filter(item => item !== e.target.name));
    }

    // joining all level filters values into 1 value and passing it to level state
    function handleSaveClick(e) {
        e.preventDefault();
        setFilters({level: levelFilterArr.join(''), category: categoryFilterArr.join('')});
        setLevelDivOpen(false);
        setCategoryDivOpen(false);
        setOpen(!open);
        console.log(filters)
    }

    function handleClearClick(e) {
        e.preventDefault();

        // Unchecking all checkboxes
        for (let i =0; i < refLevel.current.length; i++) {
          refLevel.current[i].checked = false;
        }
        for (let i =0; i < refCategory.current.length; i++) {
          refCategory.current[i].checked = false;
        }
        // Clearing filters states
        setLevelFilterArr([])
        setCategoryFilterArr([]);
        setFilters({level: '', category: ''});
        setLevelDivOpen(false);
        setCategoryDivOpen(false);
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
                <label onChange={handleLevelChange}>
                  Internship
                  <input type="checkbox" name='level=Internship&' ref={(element) => { refLevel.current[0] = element }}/>
                </label>
                <label onChange={handleLevelChange}>
                  Entry
                  <input type="checkbox" name='level=Entry%20Level&' ref={(element) => { refLevel.current[1] = element }}/>
                </label>
                <label onChange={handleLevelChange}>
                  Mid
                  <input type="checkbox" name='level=Mid%20Level&' ref={(element) => { refLevel.current[2] = element }}/>
                </label>
                <label onChange={handleLevelChange}>
                  Senior
                  <input type="checkbox" name='level=Senior%20Level&' ref={(element) => { refLevel.current[3] = element }}/>
                </label>
              </div>
          </fieldset>

          <fieldset className='level-container category-container'>
            <div className='level-toggle-div' onClick={handleCategoryDivClick}>
              <p>Category</p>
              {categoryDivOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              {categoryFilterArr.length != 0 && <p className='counter'>{categoryFilterArr.length}</p>}
            </div>
            <div className={categoryDivOpen ? 'list-visible category-list' : 'list-not-visible'}>
                <label onChange={handleCategoryChange}>
                  Accounting
                  <input type="checkbox" name='category=Accounting&' ref={(element) => { refCategory.current[0] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  Accounting and Finance
                  <input type="checkbox" name='category=Accounting%20and%20Finance&' ref={(element) => { refCategory.current[1] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  Administration and Office
                  <input type="checkbox" name='category=Administration%20and%20Office&' ref={(element) => { refCategory.current[2] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  Advertising and Marketing
                  <input type="checkbox" name='category=Advertising%20and%20Marketing&' ref={(element) => { refCategory.current[3] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  Animal Care
                  <input type="checkbox" name='category=Animal%20Care&' ref={(element) => { refCategory.current[4] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  Business Operations
                  <input type="checkbox" name='category=Business%20Operations&' ref={(element) => { refCategory.current[5] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  Computer and IT
                  <input type="checkbox" name='category=Computer%20and%20IT&' ref={(element) => { refCategory.current[6] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  Construction
                  <input type="checkbox" name='category=Construction&' ref={(element) => { refCategory.current[7] = element }}/>
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
