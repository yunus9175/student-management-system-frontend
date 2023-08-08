import { Grid, Paper, Typography } from "@mui/material";
import React, { memo } from "react";
import DatePicker from "react-datepicker";

import "./react-datepicker.css";
import { Dark00FF, Light4F } from "../../../Utils/CommonCookies";

const DatePickerSection = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  cookies,
  matches,
}) => {
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
          <Typography
            sx={{
              color: Light4F(cookies),
              fontSize: "16px",
            }}
          >
            Select start date and end date from calendar to view attendance:
          </Typography>
        </Grid>
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
          {" "}
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            className="custom-datepicker"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(DatePickerSection);
