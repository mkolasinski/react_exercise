import React from 'react';
import Logo from '../components/Logo';

import '../styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='navbar_top'>
                    <Logo />
                     <ul>
                        <li className='about_me'><a>blog</a></li>
                        <li className='info'><a>o mnie</a></li>
                        <li className='info'><a>kontakt</a></li>
                        <li className='more_info_on_mobile'><a>więcej</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;