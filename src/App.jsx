import React from 'react';

import './App.css';
import { Navbar, Banner, About, Work, Help, Pricing, Reviews, Footer } from './components/index';



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
      <Footer />
    </div>
  );
};

export default App;