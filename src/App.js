import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import OffersList from './components/OffersList';

const App = () => {
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

export default App;
