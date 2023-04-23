import React, { useState } from 'react';

import './Order.css';
import { orders } from '../../data';



const Order = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='app__order'>
            <h1>Order Development</h1>
            <p>
                Let's create a product together that will bring profit to 
                your business and set you apart from the competition.
            </p>
            <a 
                href="tel:0614001973"
                onPointerEnter={ () => setHovered(true) }
                onPointerLeave={ () => setHovered(false) }
            >Order Now</a>
            <div className='pics-container'>
                {
                    orders.map((o, i) => (
                        <div 
                            className={ `order ${ hovered ? 'hovered' : '' }` } key={ o.alt }
                            style={{
                                left: !(i%2) ? `calc(50% + ${(i+1) * -5}rem)` : `calc(50% + ${(i+1) * 5}rem)` ,
                                transform: 
                                !(i%3) ? 
                                    'rotateZ(-1.8deg) translateY(-1.5rem) translateX(-50%)' : 
                                !(i%2) ? 
                                    'rotateZ(1.8deg) translateY(-1rem) translateX(-50%)' : 
                                    'rotateZ(1deg) translateY(1.5rem) translateX(-50%)',
                                zIndex: i+1,
                                border: o.border,
                                transitionDelay: `calc(.1s * ${ i/2.5 })`,
                            }}
                        >
                            <img src={ o.src } alt={ o.alt } />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Order;