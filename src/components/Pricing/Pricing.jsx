import React from 'react';

import './Pricing.css';
const imageSource = 'https://static.tildacdn.info/tild6265-6137-4664-a631-376666663835/Rectangle_20.png';
import { socials } from '../../data';



const Pricing = () => {
  return (
    <div className='app__pricing'>
        <img src={ imageSource } alt="pricing" />
        <h1>Project cost</h1>
        <div className='pricing-container'>
            <div className='cards left'>
                <div className="card">
                    <div className='title'>
                        <h1>Landing page</h1>
                        <h1>999 DH</h1>
                    </div>
                    <p>
                        A one-page website that introduces a product.
                        It can be a physical object, an IT service or a course.
                    </p>
                    <a href="#" className='order'>Order Now</a>
                </div>
                <div className="card">
                    <div className='title'>
                        <h1>Multipage</h1>
                        <h1>1600 DH</h1>
                    </div>
                    <p>
                        A mult-page website that represents the company.
                        It such project, there are several scenarios for each user 
                        to find his own.
                    </p>
                    <a href="#" className='order'>Order Now</a>
                </div>
            </div>
            <div className="cards right">
                <div className="card">
                    <div className='title'>
                        <h1>Online Store</h1>
                        <h1>999 DH</h1>
                    </div>
                    <p>
                        The online store is intended for the sale of 
                        goods on the Internet with the possibility of 
                        paying online.
                    </p>
                    <a href="#" className='order'>Order Now</a>
                </div>
                <div className="card">
                    <div className='title'>
                        <h1>Redesign</h1>
                        <h1>400 DH</h1>
                    </div>
                    <p>
                        We completely redesign your product. Creating a new structure, 
                        positioning and style of your brand.
                    </p>
                    <a href="#" className='order'>Order Now</a>
                </div>
            </div>
        </div>
        <div className='consultation'>
            <h2>Consultation</h2>
            <p>
                30-minute consultation on your product, finding ways to 
                improve it, developing a strategy, etc. Discussion of issues 
                and ways to find product improvement.
            </p>
            <div className='social'>
                {
                    socials.map((s, i) => {
                        return (
                            <a 
                                href={ s.link } 
                                key={ s.title }
                                target='_blank'
                                rel='noreferrer'
                            >
                                { s.icon }
                            </a>
                        )
                    })
                }
            </div>
        </div>
    </div>
  );
};

export default Pricing;