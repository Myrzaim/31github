import React from 'react';
import Header from '../Header/Header';
import './Homepage.css';
import homelogo from '../Image/homelogo.png';

const homepage = () => {
    return (<>
        <Header/>
        <div className='first-div'>
            <div className='d-flex div-second'>
                <img src={homelogo} alt="homeLogo" className="homeLogo" />
                <p className='first-txt'><span>Unlock</span> Your Creative Potential</p>
          </div>
        </div>
        </> );
};

export default homepage;