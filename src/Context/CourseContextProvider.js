import axios from "axios";
import React, { createContext, useReducer } from "react";
// import { useLocation } from "react-router-dom";

export const courseContext = createContext(); // облако

const API = "http://localhost:3030";
const courseApi = API + "/courses";
const kartCourseApi = API + "/kart_courses";
const kartPostApi = API + "/kart_post";

const INIT_STATE = {
  courses: null,
  kart_courses: null,
  kart_postes:null
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...prevState,
        courses: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 6),
      };
    case "GET_KART_COURSES":
      return {
        ...prevState,
        kart_courses: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 6),
      };
      case "GET_KART_POSTES":
      return {
        ...prevState,
        kart_postes: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    default:
      return prevState;
  }
}

const CourseContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // const location = useLocation();

  // read COURSE
  async function readCourses() {
    const res = await axios(`${courseApi}`);

    dispatch({
      type: "GET_COURSES",
      payload: res,
    });
  }

  // read KART COURSE
  async function readKartCourses() {
    const res = await axios(`${kartCourseApi}`);
   
    dispatch({
      type: "GET_KART_COURSES",
      payload: res,
    });
  
  }

  // read KART POST
  async function readKartPostes() {
    const res = await axios(`${kartPostApi}`);
   
    dispatch({
      type: "GET_KART_POSTES",
      payload: res,
    });
  
  }


  let cloud = {
    readCourses,
    readKartCourses,
    readKartPostes,
    courseArr: state.courses,
    kartCourseArr: state.kart_courses,
    kartPostArr: state.kart_postes
  };

  return (
    <courseContext.Provider value={cloud}>
      {props.children}
    </courseContext.Provider>
  );
};

export default CourseContextProvider;
