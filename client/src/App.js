// src/App.js
import React from 'react';
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Addblog from './components/Addblog';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addblog' element={<Addblog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;