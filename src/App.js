import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import OffersList from './components/OffersList';

const App = () => {
  const [searchbarFilter, setSearchbarFilter] = useState('');
   
  return (
    <div>
      <Navbar setSearchbarFilter={ setSearchbarFilter } />
      <main>
        <OffersList searchbarFilter={ searchbarFilter }/>
      </main>
    </div>
  )
}

export default App;
