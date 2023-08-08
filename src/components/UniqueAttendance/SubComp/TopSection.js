import {
  Box,
  Grid,
  LinearProgress,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { Dark00FF, Light4F } from "../../../Utils/CommonCookies";

const TopSection = ({ AttData, cookies, loading }) => {
  const matches = useMediaQuery("(min-width:600px)");

  const LinearProgressBar = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          color="inherit"
        />
      </Box>
    );
  };
  return (
    <Paper
      elevation={0}
      sx={{
        p: "10px",
        background: Dark00FF(cookies),
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
          sx={{
            display: "flex",
            justifyContent: matches ? "flex-start" : "center",
          }}
        >
          {loading ? (
            <LinearProgressBar />
          ) : (
            <Box
              sx={{
                color: Light4F(cookies),
                fontSize: "18px",
                textTransform: "capitalize",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: matches ? "flex-start" : "center",
                width: "100%",
              }}
            >
              Course:
              <Typography
                sx={{
                  color: Light4F(cookies),
                  fontSize: "18px",
                  textTransform: "uppercase",
                  ml: 1,
                }}
              >
                {" "}
                {AttData?.course}
              </Typography>
              <Typography
                sx={{
                  color: Light4F(cookies),
                  fontSize: "18px",
                  textTransform: "capitalize",
                  ml: 1,
                }}
              >
                ({AttData?.courseYear})
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: matches ? "flex-end" : "center",
          }}
        >
          {loading ? (
            <LinearProgressBar />
          ) : (
            <Typography
              sx={{
                color: Light4F(cookies),
                fontSize: "18px",
              }}
            >
              Date: {moment(AttData?.date).format("LL")}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(TopSection);
