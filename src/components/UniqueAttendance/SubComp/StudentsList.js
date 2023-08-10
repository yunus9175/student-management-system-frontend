import React, { memo } from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PaperWrapper from "../../../Utils/PaperWrapper";
import {
  Grid,
  Box,
  Avatar,
  CardContent,
  CardActionArea,
  Card,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import { CardBorder, DarkFFF } from "../../../Utils/CommonCookies";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import { useNavigate } from "react-router-dom";
const StudentsList = ({ cookies, data, id }) => {
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
      <Grid
        container
        spacing={2}
        sx={{p:2}}
      >
        {data?.length > 0 ? (
          data?.map((item, index) => {
            const topColor = item?.attendance ? "#4CAF50" : "#EF5350",
              bottomColor = item?.attendance ? "#1B5E20" : "#B71C1C";
            return (
              <Grid item keys={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    background: topColor,
                    border: CardBorder(cookies, bottomColor),
                  }}
                  elevation={0}
                >
                  <CardActionArea>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "row",
                        p: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          background: bottomColor,
                          width: 80,
                          height: 80,
                          fontSize: 36,
                        }}
                      >
                        {data?.attendance ? "A" : "P"}
                      </Avatar>

                      <Tooltip
                        title={`View ${item?.fullName}'s Attendance`}
                        placement="top"
                      >
                        <IconButton
                          onClick={() => RedirectToStudentAttendance(item?._id)}
                        >
                          <ContentPasteGoIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                      </Tooltip>
                    </Box>

                    <CardContent sx={{ p: "10px", background: bottomColor }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          color: "#fff",
                          textAlign: "center",
                        }}
                      >
                        {item?.fullName}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
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
      </Grid>
    </PaperWrapper>
  );
};

export default memo(StudentsList);
