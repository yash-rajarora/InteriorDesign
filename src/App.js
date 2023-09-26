import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import Footer from './component/footer';
import Explore from './component/Explore';

function App() {
  
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route element={<Home />} exact path='/' /> 
         <Route element={<Explore />} exact path='/Explore' /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;