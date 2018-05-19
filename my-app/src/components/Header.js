import React from 'react';
import Logo from '../components/Logo';

import '../styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar_top">
                    <Logo />
                     <ul>
                        <li className="about_me"><a>O mnie</a></li>
                        <li className="info"><a>Biografia</a></li>
                        <li className="info"><a>Moja praca</a></li>
                        <li className="info"><a>Kontakt</a></li>
                        <li className="more_info_on_mobile">Więcej</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;