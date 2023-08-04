import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import { useCookies } from "react-cookie";
const ViewRecords = lazy(() =>
  import("../components/ManageStudent/ViewRecords")
);

const ViewTeacher = lazy(() =>
  import("../components/ManageTeacher/ViewTeacher")
);
const ManageTeacher = lazy(() => import("../components/ManageTeacher/index"));
const ManageDepartment = lazy(() => import("../components/ManageDept/index"));

const ManageAttendanceByAdmin = lazy(() =>
  import("../components/AttendanceManageByAdmin/index")
);
const UniqueAttendance = lazy(() =>
  import("../components/UniqueAttendance/index")
);

const UniqueStudentAttendance = lazy(() =>
  import("../components/UniqueStudentAtt/index")
);

const Dashboard = lazy(() => import("../components/Dashboard/index"));
const ManageStudent = lazy(() => import("../components/ManageStudent/index"));
const Login = lazy(() => import("../components/Login/index"));

const PageNotFound = lazy(() => import("../Utils/PageNotFound"));

const PrivateRoute = lazy(() => import("../route/PrivateRoute"));

const PublicRoute = lazy(() => import("../route/PublicRoute"));

const ForgotPassword = lazy(() => import("../components/ForgotPassword/index"));

const ResetPassword = lazy(() => import("../components/ResetPassword/index"));

const EditProfile = lazy(() => import("../components/EditProfile"));

const Home = lazy(() => import("../components/Home"));

const ViewMessage = lazy(() => import("../components/ViewMessage"));

const ManageAttendance = lazy(() =>
  import("../components/StudentAttendance/index")
);
const RouteIndex = () => {
  const [cookies] = useCookies(["UserType"]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/manage-queries" element={<ViewMessage />} />

          {/* Admin-specific routes */}
          {cookies?.UserType === "Admin" && (
            <>
              <Route
                exact
                path="/manage-teachers"
                element={<ManageTeacher />}
              />
              <Route
                exact
                path="/manage-teachers/:id"
                element={<ViewTeacher />}
              />
              <Route
                exact
                path="/manage-departments"
                element={<ManageDepartment />}
              />
              <Route
                exact
                path="/manage-students-account"
                element={<ManageStudent />}
              />
              <Route
                exact
                path="/manage-students-account/:id"
                element={<ViewRecords />}
              />
              <Route exact path="/manage-profile" element={<EditProfile />} />
              <Route
                exact
                path="/manage-students-attendance"
                element={<ManageAttendanceByAdmin />}
              />

              <Route
                exact
                path="/manage-students-attendance/:id"
                element={<UniqueAttendance />}
              />
              <Route
                exact
                path="/view-student-attendance/:id"
                element={<UniqueStudentAttendance />}
              />
            </>
          )}

          {/* Teacher-specific routes */}
          {cookies?.UserType === "Teacher" && (
            <>
              {" "}
              <Route
                exact
                path="/manage-students"
                element={<ManageStudent />}
              />
              <Route
                exact
                path="/manage-students/:id"
                element={<ViewRecords />}
              />
              <Route exact path="/manage-account" element={<EditProfile />} />
              <Route
                exact
                path="/manage-attendance"
                element={<ManageAttendance />}
              />
            </>
          )}
        </Route>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/sign_in" element={<Login />} />

          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
        </Route>
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteIndex;
