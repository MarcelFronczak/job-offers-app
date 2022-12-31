import React from 'react'
import './Offer.css'

function Offer({ offer }) {
  return (
    <div>
      <div>
        <h1 className='offer-heading'>{offer.name}</h1>
        <p className='company-name'>{offer.company.name}</p>
      </div>
      <div>
        <p>{offer.levels[0].name}</p>
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
