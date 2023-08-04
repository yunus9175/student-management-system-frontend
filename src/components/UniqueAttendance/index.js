import React, { useState } from "react";
import CustomTheme from "../../Utils/CustomTheme";
import MiniDrawer from "../Drawer";
import { Container } from "@mui/material";
import TitleBox from "../../Utils/TitleBox";
import AddchartIcon from "@mui/icons-material/Addchart";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import TopSection from "./SubComp/TopSection";
import AttendanceInfo from "./SubComp/AttendanceInfo";
import StudentsList from "./SubComp/StudentsList";
import AttendanceGraphChart from "./SubComp/AttendanceGraphChart";
import { GET_ATTENDANCE_BY_ID } from "../../ApiFunctions/attendance";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { ContainerStyle } from "../../Utils/stylingMethods";

const UniqueIndex = () => {
  const { id } = useParams();
  const [AttData, setAttData] = useState([]);
  const dispatch = useDispatch();
  const [cookies] = useCookies(["loggedIn", "UserId", "theme"]);

  useEffect(() => {
    GET_ATTENDANCE_BY_ID(id)
      .then((res) => {
        setAttData(res.data);
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  }, [dispatch, id]);



  return (
    <CustomTheme>
      <MiniDrawer>
        <Container maxWidth="xl" sx={ContainerStyle}>
          <TitleBox
            icon={
              <AddchartIcon
                sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
              />
            }
            text={"View Attendance Details"}
            id={id}
          />{" "}
          <TopSection AttData={AttData} />
          <AttendanceInfo cookies={cookies} AttData={AttData} />
          <StudentsList cookies={cookies} AttData={AttData} id={id} />
          <AttendanceGraphChart cookies={cookies} AttData={AttData} />
        </Container>
      </MiniDrawer>
    </CustomTheme>
  );
};

export default UniqueIndex;
