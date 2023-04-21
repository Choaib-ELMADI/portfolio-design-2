import React, { useRef } from 'react';

import './Reviews.css';
import images from '../../constants/images';



const Reviews = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 250;
        } else {
            current.scrollLeft += 250;
        }
    }

    return (
        <div className='app__reviews'>
            <h1><span>Reviews</span> about <br /> working with me</h1>
            <p>
                Everything is known in comparison and my knowledge 
                and professional skills can best be judged by the reviews of my clients.
            </p>
            <div className='reviews-wrapper' ref={ scrollRef }>
                <div className='review'>
                    <div className='testimonial'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Voluptates exercitationem 
                            illum temporibus cupiditate, obcaecati aliquam
                        </p>
                    </div>
                    <div className='client'>
                        <div className='profile'>
                            <img src={ images.profile } alt="Client Profile" />
                        </div>
                        <div className='name'>
                            <h2>Choaib ELMADI</h2>
                            <p>@choaib_elmadi.94</p>
                        </div>
                    </div>
                </div>
            </div>
            <button 
                className='left'
                onClick={ () => scroll('left') }
            >left</button>
            <button
                className='right'
                onClick={ () => scroll('right') }
            >right</button>
        </div>
    );
};

export default Reviews;