import React from 'react';
import './Footer.css';
import navLogo from '../Image/navLogo.png';
import List from 'reactstrap'; 

const Footer = () => {
    return (
        <div>
            <div>
            <div className='navLogo'>
            <img src={navLogo} alt="navLogo" className="imgLogo" />
            </div> 
            
<List type="unstyled">
  <li>
    Lorem ipsum dolor sit amet
  </li>
  <li>
    Consectetur adipiscing elit
  </li>
  <li>
    Integer molestie lorem at massa
                </li>
                </List>
                </div>
            <div></div> 
            <div></div> 
            <div></div> 
        </div>
    );
};

export default Footer;