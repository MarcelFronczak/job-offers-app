import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import OffersList from '../OffersList/OffersList';

const Home = () => {
  const [searchbarFilter, setSearchbarFilter] = useState('');
  const [level, setLevel] = useState([]);
  const [signInAlert, setSignInAlert] = useState(false);
   
  return (
    <div>
      <Navbar setSearchbarFilter={ setSearchbarFilter } setLevel={ setLevel } signInAlert={ signInAlert } setSignInAlert={ setSignInAlert }/>
      <main>
        <OffersList searchbarFilter={ searchbarFilter } level={ level } setSignInAlert={ setSignInAlert } />
      </main>
    </div>
  )
}

export default Home;