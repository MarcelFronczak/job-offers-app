import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Offer from '../Offer/Offer';
import './OffersList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FiltersContext } from '../../../../context/FiltersContext';

function OffersList({ setSignInAlert }) {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const {filters} = useContext(FiltersContext);

    useEffect(() => {
      // when filters are submited or deleted, we come back to page #1
      setPage(1);
    }, [filters])

    useEffect(() => {
      setLoading(true)
      axios.get(`https://www.themuse.com/api/public/jobs?page=1`)
          .then(res => {
            setLoading(false);
            setOffers(res.data.results);
          }
          )
          .catch(err => {
            console.log(err)
            setLoading(false)
          })
    }, [])

    useEffect(() => {
      setLoading(true)
        axios.get(`https://www.themuse.com/api/public/jobs?${filters.category}${filters.level}page=${page}`)
            .then(res => {
              setLoading(false)
              setOffers(res.data.results)
            })
            .catch(err => {
              console.log(err)
              setLoading(false)
            })
            
    }, [page, filters])

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
              <Offer key={offer.id} offer={offer} setSignInAlert={ setSignInAlert } />
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
        loading === false && offers.length !== 0 &&(
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
