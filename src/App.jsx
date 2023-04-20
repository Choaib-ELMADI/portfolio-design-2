import React from 'react';

import './App.css';
import { Navbar, Banner, About } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <About />
      <div style={{ height: '100vh', background: '#1d1d1d' }} />
      <div style={{ height: '100vh', background: '#f5f5f5' }} />
      <div style={{ height: '100vh', background: '#1d1d1d' }} />
    </div>
  );
};

export default App;