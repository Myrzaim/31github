import React, { useContext } from 'react';
import './Kart.css';
import { Card, CardTitle,CardText, Button } from 'reactstrap';
import kartbtn from '../Image/kart-btn.png';
import { courseContext } from '../../Context/CourseContextProvider';

const Kart = ({ obj }) => {
  const {readCourses} = useContext(courseContext)
    return (
       <>
<div>
  <Card
    body
    className="my-2"
    style={{
      width: '33rem'
    }}
  >
    <CardTitle className='kart-num' tag="h1">
      01
            </CardTitle>
            <CardTitle className='title' tag="h5">
            Flexible Learning Schedule
    </CardTitle>
    <CardText className='kart-txt'>
    Fit your coursework around your existing commitments and obligations
    </CardText>
            <Button className='btn1'>
              <img src={kartbtn}></img>
      
    </Button>
  </Card>
            </div>
            </>
    );
};

export default Kart;