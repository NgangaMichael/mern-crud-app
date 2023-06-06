// src/App.js
import React from 'react';
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Addblog from './components/Addblog';
import Details from './components/Details';
import Editblog from './components/Editblog';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addblog' element={<Addblog />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/editblog/:id' element={<Editblog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;