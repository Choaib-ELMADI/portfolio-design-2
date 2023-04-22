import React from 'react';

import './Footer.css';



const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='create'>
            <h1 className='logo'>C<span>.</span>EL</h1>
            <p>
                Lorem ipsum dolor ---- sit amet, 
                consectetur adipisicing elit. 
                Lorem ipsum dolor sit amet.
            </p>
            <a href="tel:0614001973">Create a website</a>
        </div>
        <div className='links'>
            <a href="#">How to remove this block?</a>
            <a href="#">About platform</a>
            <a href="#">Submit a complaint</a>
        </div>
    </div>
  );
};

export default Footer;