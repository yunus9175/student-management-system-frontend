import React, { memo } from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PaperWrapper from "../../../Utils/PaperWrapper";
import {
  Grid,
  Tooltip,
  Box,
  Avatar,
  IconButton,
  Paper,
  Chip,
  Typography,
} from "@mui/material";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import { Dark00FF, DarkFF4F, DarkFFF } from "../../../Utils/CommonCookies";
import { useNavigate } from "react-router-dom";
const CommonUI = ({ value, cookies, title }) => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: DarkFF4F(cookies),
        textTransform: "capitalize",
      }}
      xs={12}
      sm={6}
      md={2}
    >
      <Tooltip title={title} placement="top">
        <Box sx={{ cursor: "default" }}> {value}</Box>
      </Tooltip>
    </Grid>
  );
};

const StudentsList = ({ cookies, AttData, id }) => {
  const buttonStyles = {
    borderRadius: "50%",
    color: "white",
    width: "40px",
    height: "40px",
    transition: "all 0.3s ease",
  };
  const navigate = useNavigate();

  const RedirectToStudentAttendance = (_id) => {
    navigate(`/view-student-attendance/${_id}`);
    localStorage.setItem("attendance_id", id);
  };
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#EC407A"}
      icon={<PeopleOutlineIcon />}
      text={"Students list"}
    >
      {AttData?.attendance?.length > 0 ? (
        AttData?.attendance?.map((item, index) => {
          const topColor = item?.attendance ? "#4CAF50" : "#EF5350";
          return (
            <Paper
              elevation={0}
              sx={{
                background: Dark00FF(cookies),
                border: `1px solid ${topColor}`,
                m: 2,
                p: 2,
              }}
            >
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                keys={index}
              >
                <CommonUI
                  value={item?.rollNo}
                  cookies={cookies}
                  title={"RollNo"}
                />
                <CommonUI
                  value={<Avatar src={item?.profileImage} sx={buttonStyles} />}
                  cookies={cookies}
                  title={null}
                />
                <CommonUI
                  value={item?.fullName}
                  cookies={cookies}
                  title={"Student name"}
                />
                <CommonUI
                  value={item?.gender}
                  cookies={cookies}
                  title={"Gender"}
                />
                <CommonUI
                  value={
                    item?.attendance === true ? (
                      <Chip label="Present" color="success" />
                    ) : (
                      <Chip label="Absent" color="error" />
                    )
                  }
                  cookies={cookies}
                  title={"Attendance status"}
                />
                <CommonUI
                  value={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        flexDirection: "row",
                      }}
                    >
                      <Tooltip title={"View Attendance"} placement="top">
                        <IconButton
                          onClick={() => RedirectToStudentAttendance(item?._id)}
                        >
                          <ContentPasteGoIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  }
                  cookies={cookies}
                  title={null}
                />
              </Grid>
            </Paper>
          );
        })
      ) : (
        <Box
          sx={{
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         width:'100%'
         
          }}
        >
          <Typography
            sx={{
              color: DarkFFF(cookies),
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            No Data Found
          </Typography>
        </Box>
      )}
    </PaperWrapper>
  );
};

export default memo(StudentsList);
