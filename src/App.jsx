import React from 'react';

import './App.css';
import { Navbar, Banner } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <div style={{ height: '100vh', background: 'blue' }} />
      <div style={{ height: '100vh', background: 'orange' }} />
      <div style={{ height: '100vh', background: 'greenyellow' }} />
    </div>
  );
};

export default App;