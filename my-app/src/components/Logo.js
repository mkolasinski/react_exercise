import React    from 'react';
import {Image}  from 'react-bootstrap';
import Foto     from '../assets/images/logo.png';

import '../styles/logo.css';

class Logo extends React.Component {
    render() {
        return (
            <Image responsive src={Foto}></Image>
        )
    }
}

export default Logo;