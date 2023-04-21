import React from 'react';

import './App.css';
import { Navbar, Banner, About, Work, Help, Pricing, Reviews } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <About />
      <Work />
      <Help />
      <Pricing />
      <Reviews />
    </div>
  );
};

export default App;