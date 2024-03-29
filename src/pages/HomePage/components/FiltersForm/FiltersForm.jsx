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
    const { setFilters } = useContext(FiltersContext);
    const refLevel = useRef([]);
    const refCategory = useRef([]);

    function handleLevelDivClick() {
        setLevelDivOpen(!levelDivOpen);
        setCategoryDivOpen(false);
    }

    function handleCategoryDivClick() {
      setCategoryDivOpen(!categoryDivOpen);
      setLevelDivOpen(false);
  }
    
    // pushing level filter value to array
    function handleLevelChange(e) {
        e.target.checked ? setLevelFilterArr(arr => [...arr, e.target.name]) : setLevelFilterArr(arr => arr.filter(item => item !== e.target.name));
    }

    // pushing category filter value to array
    function handleCategoryChange(e) {
      e.target.checked ? setCategoryFilterArr(arr => [...arr, e.target.name]) : setCategoryFilterArr(arr => arr.filter(item => item !== e.target.name));
    }

    // joining all level/category filters values into 1 value and passing it to level state
    function handleSaveClick(e) {
        e.preventDefault();
        setFilters({level: levelFilterArr.join(''), category: categoryFilterArr.join('')});
        setLevelDivOpen(false);
        setCategoryDivOpen(false);
        setOpen(!open);
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
                  <span>Internship</span>
                  <input type="checkbox" name='level=Internship&' ref={(element) => { refLevel.current[0] = element }}/>
                </label>
                <label onChange={handleLevelChange}>
                  <span>Entry</span>
                  <input type="checkbox" name='level=Entry%20Level&' ref={(element) => { refLevel.current[1] = element }}/>
                </label>
                <label onChange={handleLevelChange}>
                  <span>Mid</span>
                  <input type="checkbox" name='level=Mid%20Level&' ref={(element) => { refLevel.current[2] = element }}/>
                </label>
                <label onChange={handleLevelChange}>
                  <span>Senior</span>
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
                  <span>Accounting</span>
                  <input type="checkbox" name='category=Accounting&' ref={(element) => { refCategory.current[0] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Accounting and Finance</span>
                  <input type="checkbox" name='category=Accounting%20and%20Finance&' ref={(element) => { refCategory.current[1] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Administration and Office</span>
                  <input type="checkbox" name='category=Administration%20and%20Office&' ref={(element) => { refCategory.current[2] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Advertising and Marketing</span>
                  <input type="checkbox" name='category=Advertising%20and%20Marketing&category=Marketing&' ref={(element) => { refCategory.current[3] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Animal Care</span>
                  <input type="checkbox" name='category=Animal%20Care&' ref={(element) => { refCategory.current[4] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Business Operations</span>
                  <input type="checkbox" name='category=Business%20Operations&' ref={(element) => { refCategory.current[5] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Computer and IT</span>
                  <input type="checkbox" name='category=Computer%20and%20IT&' ref={(element) => { refCategory.current[6] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Construction</span>
                  <input type="checkbox" name='category=Construction&' ref={(element) => { refCategory.current[7] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Data and Analytics</span>
                  <input type="checkbox" name='category=Data%20and%20Analytics&' ref={(element) => { refCategory.current[8] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Data Science</span>
                  <input type="checkbox" name='category=Data%20Science&' ref={(element) => { refCategory.current[9] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Design and UX</span>
                  <input type="checkbox" name='category=Design%20and%20UX&category=Design&' ref={(element) => { refCategory.current[10] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Editor</span>
                  <input type="checkbox" name='category=Editor&' ref={(element) => { refCategory.current[11] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Education</span>
                  <input type="checkbox" name='category=Education&' ref={(element) => { refCategory.current[12] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Healthcare</span>
                  <input type="checkbox" name='category=Healthcare&' ref={(element) => { refCategory.current[13] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>HR</span>
                  <input type="checkbox" name='category=HR&category=Human%20Resources%20and%20Recruitment&' ref={(element) => { refCategory.current[14] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Law</span>
                  <input type="checkbox" name='category=Law&' ref={(element) => { refCategory.current[15] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Manufacturing and Warehouse</span>
                  <input type="checkbox" name='category=Manufacturing%20and%20Warehouse&' ref={(element) => { refCategory.current[16] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Media, PR, and Communications</span>
                  <input type="checkbox" name='category=Media,%20PR,%20and%20Communications&' ref={(element) => { refCategory.current[17] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Mental Health</span>
                  <input type="checkbox" name='category=Mental%20Health&' ref={(element) => { refCategory.current[17] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Product Management</span>
                  <input type="checkbox" name='category=Product%20Management&' ref={(element) => { refCategory.current[18] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Project Management</span>
                  <input type="checkbox" name='category=Project%20Management&' ref={(element) => { refCategory.current[19] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Real Estate</span>
                  <input type="checkbox" name='category=Real%20Estate&' ref={(element) => { refCategory.current[20] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Retail</span>
                  <input type="checkbox" name='category=Retail&' ref={(element) => { refCategory.current[21] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Sales</span>
                  <input type="checkbox" name='category=Sales&' ref={(element) => { refCategory.current[22] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Science and Engineering</span>
                  <input type="checkbox" name='category=Science%20and%20Engineering&' ref={(element) => { refCategory.current[23] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Software Engineer</span>
                  <input type="checkbox" name='category=Software%20Engineer&category=Software%20Engineering&' ref={(element) => { refCategory.current[24] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Sports, Fitness, and Recreation</span>
                  <input type="checkbox" name='category=Sports,%20Fitness,%20and%20Recreation&' ref={(element) => { refCategory.current[25] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Transportation and Logistics</span>
                  <input type="checkbox" name='category=Transportation%20and%20Logistics&' ref={(element) => { refCategory.current[26] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Videography</span>
                  <input type="checkbox" name='category=Videography&' ref={(element) => { refCategory.current[27] = element }}/>
                </label>
                <label onChange={handleCategoryChange}>
                  <span>Writing and Editing</span>
                  <input type="checkbox" name='category=Writer&category=Writing%20and%20Editing&' ref={(element) => { refCategory.current[28] = element }}/>
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
