import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import OffersList from '../OffersList/OffersList';

const Home = () => {
  const [signInAlert, setSignInAlert] = useState(false);
   
  return (
    <div>
      <Navbar signInAlert={ signInAlert } setSignInAlert={ setSignInAlert }/>
      <main>
        <OffersList setSignInAlert={ setSignInAlert } />
      </main>
    </div>
  )
}

export default Home;