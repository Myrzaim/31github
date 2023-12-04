import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './KartCourses.css';

const KartCourses = () => {
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
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
            width="100%"
         
          />
          <div className='d-flex main-div'>
            <div className='d-flex lil-div'>
              <p className='p-style'>4 weeks</p>
              <p className='p-style'>beginner</p>
            </div>
            <div>
              <p>By John Smith</p>
            </div>
          </div>
    <CardBody>
      <CardTitle tag="h4" className='kardtitle'>
        Card title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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