import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Content from './component/Content';
import FavoritePlaces from './component/FavouritePlaces';
import Navbar from './component/Navbar';

const App = () => {
  const [searched, setSearched] = useState(false);
  const resetSearch = () => {
    setSearched(false);
    
};
  return (
    <div>
    
    <Router>
    <Navbar resetSearch={resetSearch} />
    <Routes>
      <Route path="/" element={<Content setSearched={setSearched}/>} />
      <Route path="/favourite" element={<FavoritePlaces />} />
    </Routes>      
  </Router>
    </div>
    
  );
};

export default App;
