import React from "react";
import Header from "../Header/Header";
import "./Homepage.css";
import homelogo from "../Image/homelogo.png";
import { Button } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import Logo from "../Image/Logo.png";
import Logo1 from "../Image/Logo1.png";
import Logo2 from "../Image/Logo2.png";
import Logo3 from "../Image/Logo3.png";
import Logo4 from "../Image/Logo4.png";
import Logo5 from "../Image/Logo5.png";
import Logo6 from "../Image/Logo6.png";
import mainimg from "../Image/mainimg.png";
import Kart from "../Kart/Kart";
import { useContext, useEffect } from "react";
import { courseContext } from "../../Context/CourseContextProvider";
import KartCourses from "../Kart/KartCourses";
import KartPost from "../Kart/KartPost";
import AskKart from "../Kart/AskKart";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const {
    readCourses,
    readKartCourses,
    readKartPostes,
    courseArr,
    kartCourseArr,
    kartPostArr,
  } = useContext(courseContext);

  useEffect(() => {
    readCourses();
    readKartCourses();
    readKartPostes();
  }, []);

  return (
    <>
      <Header />
      <div className="first-div">
        <div className="d-flex div-second">
          <img src={homelogo} alt="homeLogo" className="homeLogo" />
          <p className="first-txt">
            <span>Unlock</span> Your Creative Potential
          </p>
        </div>
      </div>
      <div className="third-div">
        <p>with Online Design and Development</p>
        <p> Courses.</p>
        <h6>Learn from Industry Experts and Enhance Your Skills.</h6>
        <Button>Explore Courses</Button>{" "}
        <Button className="button-white">View Pricing</Button>
      </div>
      <div className="div-list">
        <ListGroup horizontal>
          <ListGroupItem href="#" tag="a">
            <img src={Logo} className="list-group"></img>
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            <img src={Logo6} className="list-group"></img>
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            <img src={Logo1} className="list-group"></img>
          </ListGroupItem>

          <ListGroupItem href="#" tag="a">
            <img src={Logo2} className="list-group"></img>
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            <img src={Logo3} className="list-group"></img>
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            <img src={Logo4} className="list-group"></img>
          </ListGroupItem>
          <ListGroupItem href="#" tag="a">
            <img src={Logo5} className="list-group"></img>
          </ListGroupItem>
        </ListGroup>
      </div>
      <div className="hpimg">
        <img className="main-img" src={mainimg} />
      </div>

      <div className="txt-benefits">
        <div>
          <h1>Benefits</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum{" "}
            <br /> eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div>
          <Button className="button-white btn-view">View All</Button>
        </div>
      </div>
      <div className="kart">
        {courseArr ? courseArr.map((item) => <Kart obj={item} />) : null}
      </div>
      <div className="txt-benefits">
        <div>
          <h1>Our Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            <br />
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div>
          <Button className="button-white btn-view">View All</Button>
        </div>
      </div>
      <div className="div-kartcourses">
        {kartCourseArr
          ? kartCourseArr.map((item) => <KartCourses obj={item} />)
          : null}
      </div>
      <div className="txt-benefits">
        <div>
          <h1>Our Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            <br />
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div>
          <Button className="button-white btn-view">View All</Button>
        </div>
      </div>
      <div className="div-kartcourses">
        {kartPostArr
          ? kartPostArr.map((item) => <KartPost obj={item} />)
          : null}
      </div>
      <div className="txt-benefits">
        <div>
          <h1>Our Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem
            <br /> nibh et. Ac cum eget habitasse in velit fringilla feugiat
            senectus in.
          </p>
        </div>
        <div className="d-flex btn-div">
          <Button className="button-white btn-view prising_div">Monthly</Button>
          <Button className="button-white btn-view">Yearly</Button>
        </div>
      </div>
      <div className="prices_div">
        <div className="pricing_div">
          <p className="price_title">Free plan</p>
          <div className="price_item">
            <p className="price_item_value">0$</p>
            <p className="price_item_time">/month</p>
          </div>
          <p className="price_availabilities">Available Features</p>
          <div className="price_availability_item price_div">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Access to selected free courses.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Limited course materials and resources.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Basic community support.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              No certification upon completion.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Ad-supported platform.
            </p>
          </div>
          <div className="price_availability_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z" fill="#262626"/>
</svg>
            <p className="price_availability_item_text">
              Access to exclusive Pro Plan community forums.
            </p>
          </div>
          <div className="price_availability_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z" fill="#262626"/>
</svg>
            <p className="price_availability_item_text">
              Early access to new courses and updates.
            </p>
          </div>
          <Button className="w-100">Get Started</Button>
        </div>
        <div className="pricing_div">
          <p className="price_title">Pro plan</p>
          <div className="price_item">
            <p className="price_item_value">79$</p>
            <p className="price_item_time">/month</p>
          </div>
          <p className="price_availabilities">Available Features</p>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Access to selected free courses.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Limited course materials and resources.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Basic community support.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              No certification upon completion.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Ad-supported platform.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Access to exclusive Pro Plan community forums.
            </p>
          </div>
          <div className="price_availability_item">
            <svg
              className="price_availability_item_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.364 3.32297C13.6276 3.52379 13.6785 3.90027 13.4777 4.16385L7.07765 12.5639C6.97272 12.7016 6.81341 12.7873 6.64066 12.7989C6.46791 12.8105 6.29856 12.7469 6.17613 12.6245L2.57613 9.02449C2.34181 8.79018 2.34181 8.41028 2.57613 8.17596C2.81044 7.94165 3.19034 7.94165 3.42465 8.17596L6.5392 11.2905L12.5231 3.4366C12.724 3.17302 13.1004 3.12214 13.364 3.32297Z"
                fill="#262626"
              />
            </svg>
            <p className="price_availability_item_text">
              Early access to new courses and updates.
            </p>
          </div>
          <Button className="w-100">Get Started</Button>
        </div>
     
      </div>
      <div className="ask_div">
        <AskKart />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;
