import React, { memo } from "react";
import PaperWrapper from "../../../Utils/PaperWrapper";
import InfoIcon from "@mui/icons-material/Info";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Dark00, DarkFFF } from "../../../Utils/CommonCookies";

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

const StudentInfo = ({ cookies, data }) => {
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#EF5350"}
      icon={<InfoIcon />}
      text={"Student Info"}
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
                src={data?.profileImage}
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
            text={"Student name"}
            value={data?.fullName}
            cookies={cookies}
          />
          <CommonUI
            text={"Roll Number"}
            value={data?.rollNo}
            cookies={cookies}
          />
          <CommonUI text={"Course"} value={data?.course} cookies={cookies} />
          <CommonUI text={"Batch"} value={data?.courseYear} cookies={cookies} />
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default memo(StudentInfo);
