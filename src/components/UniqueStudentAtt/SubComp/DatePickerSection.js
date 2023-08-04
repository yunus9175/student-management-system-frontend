import { Box, Paper } from "@mui/material";
import React, { memo } from "react";
import DatePicker from "react-datepicker";

import "./react-datepicker.css";

const DatePickerSection = ({ startDate, setStartDate, endDate, setEndDate }) => {
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        background: "radial-gradient(circle at center, #1976D2 , #292929)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "#fff",
          fontSize: "18px",
        }}
      >
        Select start date and end date from calendar to view attendance:{" "}
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          className="custom-datepicker"
        />
      </Box>
    </Paper>
  );
};

export default memo(DatePickerSection);
