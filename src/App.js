import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import OffersList from './components/OffersList';

const App = () => {
  const [filter, setFilter] = useState('');
  
  return (
    <div>
      <Navbar setFilter={setFilter} />
      <main>
        <OffersList filter={ filter }/>
      </main>
    </div>
  )
}

export default App;
