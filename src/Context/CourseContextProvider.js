import axios from "axios";
import React, { createContext, useReducer } from "react";
// import { useLocation } from "react-router-dom";

export const courseContext = createContext(); // облако

const API = "http://localhost:3030/courses";

const INIT_STATE = {
  courses: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...prevState,
        courses: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 6),
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
    console.log("reading courses");
    const res = await axios(`${API}`);

    dispatch({
      type: "GET_COURSES",
      payload: res,
    });
  }

  let cloud = {
    readCourses,
    courseArr: state.courses,
  };

  return (
    <courseContext.Provider value={cloud}>
      {props.children}
    </courseContext.Provider>
  );
};

export default CourseContextProvider;
