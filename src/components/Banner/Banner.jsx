import React from 'react';

import './Banner.css';
import images from '../../constants/images';



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

      <div className="gallery-container">

        <div className="image image-a">
          <img src={ images.kech1 } alt='Marrakech Old Medina' draggable={ false } />
        </div>
        <div className="image image-b">
          <img src={ images.kech2 } alt='Marrakech Old Medina' draggable={ false } />
        </div>
        <div className="image image-c">
          <img src={ images.kech3 } alt='Marrakech Old Medina' draggable={ false } />
        </div>

        <div className="image image-d">
          <img src={ images.dogs1 } alt='Dogs' draggable={ false } />
        </div>
        <div className="image image-e">
          <img src={ images.dogs2 } alt='Dogs' draggable={ false } />
        </div>

        <div className="image image-f">
          <img src={ images.water1 } alt='Water' draggable={ false } />
        </div>
        <div className="image image-g">
          <img src={ images.water2 } alt='Water' draggable={ false } />
        </div>

      </div>

    </div>
  );
};

export default Banner;