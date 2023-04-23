import React from 'react';

import './Banner.css';
import images from '../../constants/images';
import { pictures } from '../../data';



const Banner = () => {
  return (
    <div className='app__banner' id='about'>
      <div className='text-content'>
          <h1>I create products <br />that make profit</h1>
          <p>
              I will make a product that will bring<br /> customers and make you stand out in the market
          </p>
          <a href="tel:0614001973">Order Now</a>
      </div>

      <div className="gallery-container" id="smooth-content">
        {
          pictures.map(pic => (
            <div 
              className={ `image ${ pic.className }` }
              key={ pic.key }
            >
              <img
                key={ pic.alt }
                alt={ pic.alt }
                src={ pic.src }
                draggable={ false }
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Banner;