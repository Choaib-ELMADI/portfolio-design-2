import React from 'react';

import './Help.css';
import { help } from '../../data';



const Help = () => {
  return (
    <div className='app__help'>
        <div className='header'>
          <h1>how can i <span>help</span><br /> your business</h1>
          <p>
            Like a work of art, any project has its own character, 
            positioning and emotions that need to be correctly 
            conveyed to the user in order to make a profit. 
            I will help you with these tasks
          </p>
        </div>
        <div className='gallery'>
          {
            help.map((pic, i) => (
              <div 
                className='picture' 
                key={ `picture-${ i+1 }` }
                style={{ transform: i%2 ? 'rotateZ(0.8deg)' : 'rotateZ(-0.8deg)' }}
              >
                <img src={ pic.src } alt='Help Center' key={ pic.key } />
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default Help;