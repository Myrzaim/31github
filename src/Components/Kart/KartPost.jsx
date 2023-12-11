import React from "react";
import "./KartPost.css";
import { Card, CardBody, CardText, Button } from "reactstrap";
import photo1 from "../Image/photo1.png";

const KartPost = ({obj}) => {
  return (
    <div>
      <Card
        body
        className="my-2"
        style={{
          width: "34rem",
          height: "17rem",
          borderRadius: "2%",
        }}
      >
        <CardBody>
          <CardText>
          {obj.info}
          </CardText>
          <div className="d-flex kartpost">
            <div className="d-flex kartpost2">
              <img className="post_img" src={require(`../Image/${obj.img}`)} ></img>
                          <CardText className="karttxt"> { obj.author}</CardText>
            </div>
            <Button className="post_btn">Read Full Story</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default KartPost;
