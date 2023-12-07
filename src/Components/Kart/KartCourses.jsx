import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './KartCourses.css';

const KartCourses = ({ obj }) => {

  
    return (<>
        <div>
        <Card
            body
            className="my-2"
            style={{
              width: '34rem',
              height: '40rem',
              borderRadius:'2%'
            }}
        >
    <img
            src={obj.img} 
            alt="Card image cap"
            className='w-50'
    
         
         
          />
          <div className='d-flex main-div'>
            <div className='d-flex lil-div'>
              <p className='p-style'>{obj.duration}</p>
              <p className='p-style'>{obj.level}</p>
            </div>
            <div>
              <p>{obj.author}</p>
            </div>
          </div>
    <CardBody>
      <CardTitle tag="h4" className='kardtitle'>
        {obj.title}
      </CardTitle>
            <CardText>
              {obj.info}
            </CardText>
      <Button className='btn-get'>
        Get It Now
      </Button>
    </CardBody>
  </Card>    
        </div>
        </>
    );
};

export default KartCourses;