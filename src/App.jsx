import React from 'react';

import './App.css';
import { Navbar, Banner, About, Work, Help } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <About />
      <Work />
      <Help />
    </div>
  );
};

export default App;