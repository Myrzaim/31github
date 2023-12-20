import React from 'react';
import './Footer.css';
import navLogo from '../Image/navLogo.png';

const Footer = () => {
    return (
        <div>
            <div>
            <img src={navLogo} alt="navLogo" className="imgLogo" />
            </div> 
            <div></div> 
            <div></div> 
            <div></div> 
        </div>
    );
};

export default Footer;