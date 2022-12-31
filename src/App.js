import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import OffersList from './components/OffersList';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <OffersList />
      </main>
    </div>
  )
}

export default App;
