import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Offer from './Offer';
import './OffersList.css'

function OffersList({ filter }) {
    const [offers, setOffers] = useState([]);
    // const API_URL = "https://www.themuse.com/api/public/jobs?page=1";

    useEffect(() => {
        axios.get(`https://www.themuse.com/api/public/jobs?page=1`)
            .then(res => {
                setOffers(res.data.results);
                console.log(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div className='offers-container'>
      <h1 className='offers-heading'>Find the best position for <span className='red'>You</span></h1>
      {
        offers?.length > 0 ? 
        (
          <div>
            {offers.filter((offer) => {
              return filter.toLowerCase() === '' ? offer : offer.name.toLowerCase().includes(filter)
            })
            .map((offer) => (
              <Offer key={offer.id} offer={offer} filter={filter} />
            ))}
          </div>
        ) : (
          <div>
              <h2>No jobs found</h2>
          </div>
        )
      }
    </div>
  )
}

export default OffersList
