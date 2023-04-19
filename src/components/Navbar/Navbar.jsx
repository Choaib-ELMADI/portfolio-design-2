import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';

import './Navbar.css';
import { listItems, socials } from '../../data';



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='app__navbar'>
            <div 
                className={ menuOpen ? 'overlay active' : 'overlay' }
                onClick={ () => setMenuOpen(false) }
            />
            <a href="#" className='logo'>C<span>.</span>EL</a>
            <button
                onClick={ () => setMenuOpen(true) }
                className='open'
            >
                <AiOutlineMenu size={ 16 } />
            </button>

            <div className={ menuOpen ? 'app__navbar-menu open' : 'app__navbar-menu' }>
                <IoCloseOutline 
                    className='close' 
                    size={ 25 } 
                    onClick={ () => setMenuOpen(false) }
                />
                <div className='menu-items'>
                    <h1 className='logo'>C<span>.</span>EL</h1>
                    <ul className="list">
                        {
                            listItems.map(item => (
                                <li key={ item.id }><a href={ `#${ item.id }` }>{ item.title }</a></li>
                            ))
                        }
                    </ul>
                    <p>
                        Let's create a product together that will bring profit to your business and set you apart from the competition.
                    </p>
                    <ul className="social">
                        {
                            socials.map(s => (
                                <li key={ s.title }>
                                    <a
                                        href={ s.link }
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        { s.icon }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <a href="#" className='order'>Order Now</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;