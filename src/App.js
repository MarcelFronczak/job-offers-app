import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
      </main>
    </div>
  )
}

export default App;
