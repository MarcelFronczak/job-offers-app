import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/HomePage/components/Home/Home';
import SignIn from './pages/SignInPage/SignIn'
import SignUp from './pages/SignUpPage/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import { FiltersProvider } from './context/FiltersContext';

const App = () => {
   
  return (
    <AuthContextProvider>
      <FiltersProvider>
        <Routes>
            <Route path="/job-offers-app" element={<Home />} />
            <Route path="/job-offers-app/signin" element={<SignIn />} />
            <Route path="/job-offers-app/signup" element={<SignUp />} />
        </Routes>
      </FiltersProvider>
    </AuthContextProvider>
    
  )
}

export default App;
