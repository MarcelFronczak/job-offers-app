import React, { useState } from 'react'
import './Offer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Offer({ offer }) {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  }

  const internshipSalary = '500 - 1000';
  const entrySalary = '1250 - 1750';
  const midSalary = '2250 - 2750';
  const seniorSalary = '4000 - 5500';
  const managementSalary = '5500 - 7000';

  const level = offer.levels[0].short_name;
  const levelUpper = level[0].toUpperCase() + level.substring(1);

  return (
    <div className='offer-container'>
      <div>
        <h1 className='offer-heading'>{offer.name}</h1>
        <p className='company-name'>{offer.company.name}</p>
      </div>
      <div className='col-right'>
        <p className='level'>{levelUpper}</p>
        <FontAwesomeIcon icon={faHeart} className='save-btn' onClick={toggle} style={{color: clicked ? '#F56457' : '#EDE5D8'}}/>
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
