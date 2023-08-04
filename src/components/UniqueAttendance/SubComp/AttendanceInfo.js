import React, { memo } from "react";
import PaperWrapper from "../../../Utils/PaperWrapper";
import InfoIcon from "@mui/icons-material/Info";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Dark00, DarkFFF } from "../../../Utils/CommonCookies";
import moment from "moment";

const CommonUI = ({ text, value, cookies }) => {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        sx={{
          color: DarkFFF(cookies),
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        {text}
        <Typography
          sx={{
            color: DarkFFF(cookies),
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          {value}
        </Typography>
      </Box>
    </Grid>
  );
};

const AttendanceInfo = ({ cookies, AttData }) => {
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#EF5350"}
      icon={<InfoIcon />}
      text={"Attendance Info"}
    >
      {" "}
      <Grid
        container
        spacing={2}
        sx={{
          p: 2,
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={3} md={3}>
          <Box sx={{ pt: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={AttData?.profileImage}
                alt="user Edit Profile"
                variant="circular"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  border: "1px solid #EF5350",
                  background: Dark00(cookies),
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid container item xs={12} sm={9} md={9} spacing={2} sx={{ pt: 2 }}>
          <CommonUI
            text={"Taken by"}
            value={AttData?.takenByTeacher}
            cookies={cookies}
          />
          <CommonUI text={"Course"} value={AttData?.course} cookies={cookies} />
          <CommonUI
            text={"Batch"}
            value={AttData?.courseYear}
            cookies={cookies}
          />
          <CommonUI
            text={"Date of attendance"}
            value={moment(AttData?.date).format("LL")}
            cookies={cookies}
          />
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default memo(AttendanceInfo);
