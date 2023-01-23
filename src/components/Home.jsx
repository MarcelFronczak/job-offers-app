import React, { useState } from 'react';
import Navbar from "./Navbar";
import OffersList from './OffersList';

const Home = () => {
  const [searchbarFilter, setSearchbarFilter] = useState('');
  const [level, setLevel] = useState([]);
   
  return (
    <div>
      <Navbar setSearchbarFilter={ setSearchbarFilter } setLevel={ setLevel }/>
      <main>
        <OffersList searchbarFilter={ searchbarFilter } level={ level }/>
      </main>
    </div>
  )
}

export default Home;