import axios from "axios";
import api from "../api";
//add attendance
export const ADD_COURSE = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${api.addCourse}`, formData)
      .then((res) => {
        if (res.status === 201) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};


//get courses
export const GET_COURSES = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${api.getCourses}`)
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//update courses 
export const UPDATE_COURSE = (id, formData) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}${api.updateCourse}${id}`,
        formData
      )
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//activate or deactivate course
export const COURSE_ACTIVATION = (id, active) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}${api.courseActivation}${id}`, {
        active: active,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};



