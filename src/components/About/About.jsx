import React, { useState, useEffect } from 'react';

import './About.css';
import images from '../../constants/images';



const About = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [transition, setTransition] = useState(0);

    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }

      const handlePointerLeave = () => {
        setPosition({ x: 0, y: 0 });
        setTransition(0.2);
      }

      window.addEventListener('pointermove', handleMouseMove);
      document.addEventListener('mouseleave', handlePointerLeave);
      
      return () => {
          window.removeEventListener('pointermove', handleMouseMove)
          document.removeEventListener('mouseleave', handlePointerLeave);
      }
    }, []);
    

    return (
        <div className='app__about'>
            <div className='left'>
                <p>
                    Ever since I was a child I have been fond of drawing, 
                    often turning my drawings into cartoons with the help of 
                    my camera. This passion eventually developed into a passion 
                    for design. After graduating in industrial automation engineering, 
                    I learned to think about every detail, and I apply these skills 
                    and creative vision to every client.
                </p>
                <p>
                    Extensive experience in various fields, I know how to distinguish 
                    your business from dozens of competitors. Strategy and positioning 
                    plus an artistic approach to the issue and your business will be a 
                    market leader.
                </p>
            </div>

            <div className='card-wrapper'>
                <div 
                    className='card'
                    style={{ 
                        transform: `translate(
                            -${ position.x / 15 }px,
                            -${ position.y / 10 }px
                        )`,
                        transition: `${ transition }s`
                    }}
                >
                    <img src={ images.profile } alt='Choaib ELMADI' />
                    <h2>I am choaib elmadi</h2>
                </div>
                <h1>About Me</h1>
            </div>

            <div className='right'>
                <p>
                    20+ satisfied customers <br />
                    50+ running projects <br />
                    creative approach
                </p>
                <div />
            </div>
        </div>
    );
};

export default About;