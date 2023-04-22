import React, { useRef } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import './Reviews.css';
import { reviews } from '../../data';



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
                {
                    reviews.map((r, i) => (
                        <div 
                            className='review' 
                            key={ `review-${ i+1 }` }
                            style={{ 
                                transform: i%2 ? 'rotateZ(-1.5deg)' : 'rotateZ(1.5deg)',
                                zIndex: i+1
                            }}
                        >
                            <div className="testimonial">
                                <p>{ r.para1 }</p>
                                <p>{ r.para2 }</p>
                            </div>
                            <div className='client'>
                                <div className='profile'>
                                    <img src={ r.src } alt="Client Profile" draggable={ false } />
                                </div>
                                <div className="name">
                                    <h2>{ r.name }</h2>
                                    <p>{ r.user }</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button 
                className='left'
                onClick={ () => scroll('left') }
            >
                <FiChevronsLeft size={ 25 } />
            </button>
            <button
                className='right'
                onClick={ () => scroll('right') }
            >
                <FiChevronsRight size={ 25 } />
            </button>
        </div>
    );
};

export default Reviews;