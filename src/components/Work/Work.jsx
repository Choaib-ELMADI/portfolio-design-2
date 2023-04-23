import React from 'react';

import './Work.css';
import { works } from '../../data';



const Work = () => {
  return (
    <div className='app__work' id='work'>
        <div className='text-content'>
            <h1>Selected <br /><span>Works</span></h1>
        </div>
        <div className='works-container'>
          {
            works.map((w, i) => (
              <a 
                href={ w.link } 
                className={ `work ${ w.className }` } 
                key={ w.key }
                target='_blank'
                rel='noreferrer'
              >
                <div className='work-background'>
                  <img src={ w.back } alt='projects' key={ `project-${ i }` } />
                  <label>i</label>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. 
                    Lorem ipsum dolor sit, amet consectetur
                  </p>
                </div>
                <div className='work-info'>
                  <p>{ w.title }</p>
                  <p>{ `0${ i+1 }` }</p>
                </div>
              </a>
            ))
          }
        </div>
    </div>
  );
};

export default Work;