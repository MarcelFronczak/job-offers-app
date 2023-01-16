import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Offer from './Offer';
import './OffersList.css'

function OffersList({ searchbarFilter, level }) {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true)
        axios.get(`https://www.themuse.com/api/public/jobs?${level}page=1`)
            .then(res => {
                const data = res.data.results.filter((offer) => {
                if (offer.name.toLowerCase().includes(searchbarFilter.toLowerCase())) {
                  return offer;
                }
              });
              setLoading(false)
              setOffers(data)
            })
            .catch(err => {
              console.log(err)
              setLoading(false)
            })
            console.log(level);
            
    }, [searchbarFilter, level])

  return (
    <div className='offers-container'>
      <h1 className='offers-heading'>Find the best position for <span className='red'>You</span></h1>
      {
        loading ? (
          <div className='loading-box'>
            <div className='loader'></div>
          </div>
        ) : (
          <div>
            {offers.map((offer) => (
              <Offer key={offer.id} offer={offer} />
            ))}
          </div>
        )
      }
      { 
        loading === false && offers.length === 0 && (
          <div style={{textAlign: 'center', marginTop: '8rem'}}>
              <h2>No jobs found</h2>
          </div>
        )
      }
    </div>
  )
}

export default OffersList
