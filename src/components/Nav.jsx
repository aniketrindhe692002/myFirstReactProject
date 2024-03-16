import React from 'react'
import '../Component.css';
import ImageSpecial from './brand_logo.png';

function Nav() {

    return (
        <>
            <nav>
                <img id='webLogo' src= {ImageSpecial} alt='Logo'/>
                <ul id='navBar' >
                    <li className='navItems'>MENU</li>
                    <li className='navItems'>LOCATION</li>
                    <li className='navItems'>ABOUT</li>
                    <li className='navItems'>CONTACT</li>
                </ul>
                <button id='loginBtn'>Login</button>
            </nav>
        </>
    );
}

export default Nav;