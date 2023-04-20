import React from 'react';

import './Banner.css';



const Banner = () => {
  return (
    <div className='app__banner'>
        <div className='text-content'>
            <h1>I create products that make profit</h1>
            <p>
                I will make a product that will bring<br /> customers and make you stand out in the market
            </p>
            <a href="#">Order Now</a>
        </div>
    </div>
  );
};

export default Banner;