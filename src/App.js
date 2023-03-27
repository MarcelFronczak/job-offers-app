import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
   
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/job-offers-app" element={<Home />} />
        <Route path="/job-offers-app/signin" element={<SignIn />} />
      </Routes>
    </AuthContextProvider>
    
  )
}

export default App;
