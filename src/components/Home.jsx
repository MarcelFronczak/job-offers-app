import React, { useState } from 'react';
import Navbar from "./Navbar";
import OffersList from './OffersList';

const Home = () => {
  const [searchbarFilter, setSearchbarFilter] = useState('');
  const [level, setLevel] = useState([]);
  const [signInAlert, setSignInAlert] = useState(false);
   
  return (
    <div>
      <Navbar setSearchbarFilter={ setSearchbarFilter } setLevel={ setLevel } signInAlert={ signInAlert }/>
      <main>
        <OffersList searchbarFilter={ searchbarFilter } level={ level } setSignInAlert={ setSignInAlert } signInAlert={ signInAlert}/>
      </main>
    </div>
  )
}

export default Home;