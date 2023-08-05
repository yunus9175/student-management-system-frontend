import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";

const TopSection = ({ AttData }) => {
   const matches = useMediaQuery("(min-width:600px)");
  return (
    <Paper
      elevation={0}
      sx={{
        p: "10px",
        background: "radial-gradient(circle at center, #1976D2 , #292929)",
      }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ display: "flex", justifyContent: matches ? "start" : "center" }}
        >
          {" "}
          <Box
            sx={{
              color: "#fff",
              fontSize: "20px",
              textTransform: "capitalize",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {" "}
            Course:
            <Typography
              sx={{
                color: "#fff",
                fontSize: "20px",
                textTransform: "uppercase",
                ml: 1,
              }}
            >
              {" "}
              {AttData?.course}
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "20px",
                textTransform: "capitalize",
                ml: 1,
              }}
            >
              ({AttData?.courseYear})
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ display: "flex", justifyContent: matches ? "end" : "center" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
            }}
          >
            Date: {moment(AttData?.date).format("LL")}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(TopSection);
