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
          <img src={ images.electro1 } alt='Electronics' draggable={ false } />
        </div>
        <div className="image image-b">
          <img src={ images.electro2 } alt='Electronics' draggable={ false } />
        </div>
        <div className="image image-c">
          <img src={ images.electro3 } alt='Electronics' draggable={ false } />
        </div>

        <div className="image image-1">
          <img src={ images.code3 } alt='Coding' draggable={ false } />
        </div>
        <div className="image image-2">
          <img src={ images.code2 } alt='Coding' draggable={ false } />
        </div>
        <div className="image image-3">
          <img src={ images.code1 } alt='Coding' draggable={ false } />
        </div>

        <div className="image image-A">
          <img src={ images.model1 } alt='3D Modeling' draggable={ false } />
        </div>
        <div className="image image-B">
          <img src={ images.model2 } alt='3D Modeling' draggable={ false } />
        </div>
        <div className="image image-C">
          <img src={ images.model3 } alt='3D Modeling' draggable={ false } />
        </div>
        <div className="image image-D">
          <img src={ images.model4 } alt='3D Modeling' draggable={ false } />
        </div>

      </div>

    </div>
  );
};

export default Banner;