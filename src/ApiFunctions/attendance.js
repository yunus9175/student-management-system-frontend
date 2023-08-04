import axios from "axios";
import api from "../api";
//add attendance
export const ADD_ATTENDANCE = (formData, teacher_id, course, courseYear, date,active=true) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${api.addAttendance}`, {
        attendance: formData,
        takenByTeacher_id: teacher_id,
        course,
        courseYear,
        date,
        active,
      })
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

//get attendance
export const GET_ATTENDANCE = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${api.getAttendance}`)
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

//get attendance by id
export const GET_ATTENDANCE_BY_ID = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${api.getAttendanceById}${id}`)
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

// get student attendance
export const GET_STUDENT_ATTENDANCE = (id, startDate, endDate) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}${api.getStudentAttendance}${id}?startDate=${startDate}&endDate=${endDate}`
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


//update attendance
export const UPDATE_ATTENDANCE = (_id,attendanceId, attendance) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}${api.updateAttendance}${_id}`, {
        attendanceId: attendanceId,
        attendanceValue: attendance,
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


//delete attendance
export const DELETE_ATTENDANCE = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}${api.deleteAttendance}${id}`)
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


//activate or deactivate attendance
export const ATTENDANCE_ACTIVATION = (id, active) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}${api.attendanceActivation}${id}`,
        {
          active: active,
        }
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
