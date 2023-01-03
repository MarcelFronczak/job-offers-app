import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import OffersList from './components/OffersList';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <OffersList />
      </main>
    </div>
  )
}

export default App;
