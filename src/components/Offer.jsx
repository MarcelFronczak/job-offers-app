import React, { useState } from 'react'
import './Offer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Offer({ offer, filter }) {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  }

  const mouseEnter = () => {
    setHover(true);
  }

  const mouseLeave = () => {
    setHover(false);
  }

  const level = offer.levels[0].short_name;
  const levelUpper = level[0].toUpperCase() + level.substring(1);

  const internshipSalary = '0.5k - 1k';
  const entrySalary = '1.25k - 1.75k';
  const midSalary = '3k - 4.25k';
  const seniorSalary = '4k - 5.5k';
  const managementSalary = '5.5k - 7k';

  let salary;

  switch(level) {
    case 'internship':
      salary = internshipSalary;
      break;
    case 'entry':
      salary = entrySalary;
      break;
    case 'mid':
      salary = midSalary;
      break;
    case 'senior':
      salary = seniorSalary;
      break;
    case 'management':
      salary = managementSalary;
      break;
  }

  const saveBtnStyle = {
    color: clicked ?
      hover ?
      '#f24f40' :
      '#F56457' :
      hover ?
      '#e8dfd1' :
      '#EDE5D8',
    cursor: 'pointer',
    fontSize: '22px'
  }

  return (
      <div className='offer-container'>
        <div>
          <h1 className='offer-heading'>{offer.name}</h1>
          <p className='company-name'>{offer.company.name}</p>
        </div>
        <div className='col-right'>
          <p className='salary'>{salary}</p>
          <p className='level'>{levelUpper}</p>
          <FontAwesomeIcon icon={faHeart} className='save-btn' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={toggle} style={saveBtnStyle}/>
        </div>
      </div>
      ) 
}

export default Offer

// setting HTML from json
// function createMarkup() {
//     return {__html: 'First &middot; Second'};
//   }
  
//   function MyComponent() {
//     return <div dangerouslySetInnerHTML={createMarkup()} />;
//   }
