import React from 'react';
import Header from '../Header/Header';
import './Homepage.css';
import homelogo from '../Image/homelogo.png';
import { Button } from 'reactstrap';

const homepage = () => {
    return (<>
        <Header/>
        <div className='first-div'>
            <div className='d-flex div-second'>
                <img src={homelogo} alt="homeLogo" className="homeLogo" />
                <p className='first-txt'><span>Unlock</span> Your Creative Potential</p>
            </div>
           <div className='third-div'>
                <p>with Online Design and Development</p>
                <p> Courses.</p>
                <h6>Learn from Industry Experts and Enhance Your Skills.</h6>
                <Button color="warning">
                Explore Courses
  </Button>  <Button color="white">
  View Pricing
  </Button>
                
            </div>
        </div>
        </> );
};

export default homepage;