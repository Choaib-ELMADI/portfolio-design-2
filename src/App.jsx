import React from 'react';

import './App.css';
import { Navbar, Banner, About, Work, Help, Pricing } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <About />
      <Work />
      <Help />
      <Pricing />
    </div>
  );
};

export default App;