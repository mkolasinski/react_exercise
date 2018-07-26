import React from 'react';
import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <section className='footer'>
                <span> <a href="https://www.facebook.com/m.kolasinski1991?ref=bookmarks">Facebook</a> || 
                       &nbsp;<a href="https://github.com/mkolasinski">GitHub</a> || &nbsp;
                       <span className='footer_contact'>Kontakt</span>
                </span> <br/>
                <small>
                    Copyright 2018 by Michał Kolasinski
                </small>
            </section>
        )
    }
}

export default Footer;