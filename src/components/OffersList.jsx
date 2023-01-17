import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Offer from './Offer'
import './OffersList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

function OffersList({ searchbarFilter, level }) {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
      setLoading(true)
        axios.get(`https://www.themuse.com/api/public/jobs?${level}page=${page}`)
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
            
    }, [page, searchbarFilter, level])

    const handlePreviousBtnClick = () => {
      if(page !== 1) {
        setPage(page => page - 1);
      }
    }

    const handleNextBtnClick = () => {
      if(page !== 99) {
        setPage(page => page + 1);
      }
    }

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
      {
        loading === false && (
          <div className='page-buttons'>
            { page > 1 &&
              (
                <button onClick={handlePreviousBtnClick} className="page-btn previous-btn">
                  <FontAwesomeIcon icon={faCaretLeft} className='caret-left'/>
                  Previous
                </button>
              )
            }
            { page < 99 &&
              (
                <button onClick={handleNextBtnClick} className="page-btn next-btn">
                  Next
                  <FontAwesomeIcon icon={faCaretRight} className='caret-right' />
                </button>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default OffersList
