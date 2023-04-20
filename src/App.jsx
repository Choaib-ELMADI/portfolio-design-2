import React from 'react';

import './App.css';
import { Navbar, Banner } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <div style={{ height: '100vh', background: '#f5f5f5' }} />
      <div style={{ height: '100vh', background: '#1d1d1d' }} />
      <div style={{ height: '100vh', background: '#f5f5f5' }} />
    </div>
  );
};

export default App;