import React, { useState, useEffect } from 'react';

//import router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

//components and pages import
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Property from './Pages/Property';



function App() {
  
  return ( 
    <div className='d-flex flex-column'>
        <Header className='my-3' />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/property/:id' exact Component={Property} />
        </Routes>
        <Footer />
    </div>
   );
}

export default App;