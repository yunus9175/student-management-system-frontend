import React, { memo } from "react";
import { Typography, Grid, Paper, Box, Button } from "@mui/material";
import { Dark00FF } from "./CommonCookies";
import { useCookies } from "react-cookie";
import ExcelExport from "./ExcelExport";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
const TitleBox = ({ icon, text, data, fileName, id }) => {
  const { userData } = useSelector((state) => state.getUserProfile);
  const [cookies] = useCookies(["theme"]);
  const isAdmin = userData.role === "Admin";
  const navigate = useNavigate();
  const attendance_id = localStorage.getItem("attendance_id");
  const ExportBtnCondition = () => {
    if (
      isAdmin &&
      ![
        "/manage-teachers",
        "/manage-students",
        "/dashboard",
        "/manage-profile",
        `/manage-teachers/${id}`,
        `/manage-students/${id}`,
        `/manage-students-account/${id}`,
        `/manage-students-attendance/${id}`,
        `/view-student-attendance/${id}`,
      ].includes(window.location.pathname)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const BackBtn = () => {
    if (
      [
        `/manage-students/${id}`,
        `/manage-teachers/${id}`,
        `/manage-students-attendance/${id}`,
        `/view-student-attendance/${id}`,
        `/manage-students-account/${id}`,
      ].includes(window.location.pathname)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const BackFunction = () => {
    if (window.location.pathname === `/manage-students-attendance/${id}`) {
      navigate("/manage-students-attendance");
      localStorage.removeItem("attendance_id");
    } else if (window.location.pathname === `/manage-teachers/${id}`) {
      navigate("/manage-teachers");
    } else if (window.location.pathname === `/manage-students/${id}`) {
      navigate("/manage-students");
    } else if (window.location.pathname === `/manage-students-account/${id}`) {
      navigate("/manage-students-account");
    } else {
      navigate(`/manage-students-attendance/${attendance_id}`);
      localStorage.removeItem("attendance_id");
    }
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          elevation={0}
          sx={{
            p: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            background: Dark00FF(cookies),
            // border: CardBorder(cookies, "#1976D2"),
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {icon}
            <Typography
              sx={{
                color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                fontSize: "20px",
                ml: 1,
              }}
            >
              {text}
            </Typography>
          </Box>
          {BackBtn() && (
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "capitalize",
                color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                background: cookies.theme === "dark" && "#1976D2",
              }}
              onClick={() => BackFunction()}
            >
              Back
            </Button>
          )}
          {ExportBtnCondition() && (
            <Box>
              <ExcelExport
                userData={userData}
                data={data}
                fileName={fileName}
              />
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default memo(TitleBox);
