import React, { useEffect, useState } from "react";
import CustomTheme from "../../Utils/CustomTheme";
import { Box, Container } from "@mui/material";
import TitleBox from "../../Utils/TitleBox";
import MiniDrawer from "../Drawer";
import { Equalizer } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  ATTENDANCE_ACTIVATION,
  GET_ATTENDANCE,
} from "../../ApiFunctions/attendance";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import DialogBox from "../../Utils/DialogBox";
import { openSnackbar } from "../../app/reducer/Snackbar";
import FilterSection from "./SubComp/FilterSection";
import CardSection from "./SubComp/CardSection";
import { ContainerStyle } from "../../Utils/stylingMethods";

const ManageAttendanceByAdmin = () => {
  const [cookies] = useCookies(["loggedIn", "UserId", "theme"]);
  const { userData } = useSelector((state) => state.getUserProfile);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [AttData, setAttData] = useState([]);
  const dispatch = useDispatch();
  const inputDate = new Date();
  const isoDate = inputDate.toISOString();
  const formattedDate = isoDate.slice(0, 10);
  const [active, setActive] = useState(false);
  const [ID, setID] = useState("");
  const [filterData, setFilterData] = useState({
    course: "bca",
    courseYear: "first year",
    date: formattedDate,
  });
  const [filterFlag, setFilterFlag] = useState(false);
  const getAttendance = () => {
    GET_ATTENDANCE()
      .then((res) => {
        setAttData(res.data);
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };
  useEffect(() => {
    GET_ATTENDANCE()
      .then((res) => {
        setAttData(res.data);
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  }, [cookies, userData, dispatch, formattedDate]);


  const handleClose = () => {
    setDialogOpen(false);
    setID("");
  };
  const handleActive = (flag, id) => {
    setActive(flag);
    setDialogOpen(true);
    setID(id);
  };

  const handleActiveState = () => {
    ATTENDANCE_ACTIVATION(ID, active)
      .then((res) => {
        getAttendance();
        dispatch(
          openSnackbar({
            message: res.data,
            severity: "success",
          })
        );
        handleClose();
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };
  const newFilterData = filterFlag
    ? AttData.filter(
        (i) =>
          i?.course === filterData?.course &&
          i?.courseYear === filterData?.courseYear &&
          i?.date === filterData?.date
      )
    : AttData;
  return (
    <CustomTheme>
      <MiniDrawer>
        <Container maxWidth="xl" sx={ContainerStyle}>
          <TitleBox
            icon={
              <Equalizer
                sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
              />
            }
            text={"Manage Student's Attendance"}
          />{" "}
          <FilterSection
            cookies={cookies}
            setFormData={setFilterData}
            formData={filterData}
            filterFlag={filterFlag}
            setFilterFlag={setFilterFlag}
          />
          {newFilterData.map((item, index) => {
            return (
              <Box key={index}>
                <CardSection
                  cookies={cookies}
                  handleActive={handleActive}
                  item={item}
                />
              </Box>
            );
          })}
        </Container>
        <DialogBox
          open={dialogOpen}
          handleClose={handleClose}
          handleChange={handleActiveState}
          text={
            active === true
              ? "Are your sure you want to activate this attendance?"
              : "Are your sure you want to deactivate this attendance?"
          }
        />
      </MiniDrawer>
    </CustomTheme>
  );
};

export default ManageAttendanceByAdmin;
