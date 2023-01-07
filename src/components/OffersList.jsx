import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Offer from './Offer';
import './OffersList.css'

function OffersList({ filter }) {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [page, setPage] = useState(1);
    const API_URL = "https://www.themuse.com/api/public/jobs?page=1"; 

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                const data = res.data.results.filter((offer) => {
                if (offer.name.toLowerCase().includes(filter)) {
                  return offer;
                }
              });
              setLoading(false)
              setOffers(data);
              console.log(data);
              
            })
            .catch(err => {
              console.log(err)
              setLoading(false);
            })
    }, [filter])

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
