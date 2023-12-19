import React from "react";
import "./AskKart.css";

const AskKart = () => {
  return (
    <>
      <div className="d-flex ask">
        <div className="first_div">
          <h1 className="h1_style">Frequently Asked Questions</h1>
          <p>
            Still you have any questions? Contact our Team via
            support@skillbridge.com
                  </p>
                  <br/><br/><br/>
                  <h5>See All FAQ’s</h5>
        </div>
        <div className="second_div">
          <div className="price_availability_item">
            <p className="price_availability_item_txt">
              Can I enroll in multiple courses at once?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7 14H14M21 14H14M14 14V7M14 14V21"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="price_availability_item">
            <p>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </div>
          <div className="price_availability_item">
            <p className="price_availability_item_txt">
              Enrollment Process for Different Courses
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M6.99967 14H21.583M21.583 14L14.583 7M21.583 14L14.583 21"
                stroke="#4C4C4C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="price_availability_item">
            <p className="price_availability_item_txt">
              What kind of support can I expect from instructors?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7 14H14M21 14H14M14 14V7M14 14V21"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="price_availability_item">
            <p className="price_availability_item_txt">
              Are the courses self-paced or do they have specific start and end
              dates?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7 14H14M21 14H14M14 14V7M14 14V21"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="price_availability_item">
            <p className="price_availability_item_txt">
              Are there any prerequisites for the courses?{" "}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7 14H14M21 14H14M14 14V7M14 14V21"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="price_availability_item">
            <p className="price_availability_item_txt">
              Can I download the course materials for offline access?{" "}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7 14H14M21 14H14M14 14V7M14 14V21"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskKart;
