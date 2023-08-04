import React, { memo } from "react";
import PieChartIcon from "@mui/icons-material/PieChart";
import PaperWrapper from "../../../Utils/PaperWrapper";
import { Grid } from "@mui/material";
import AttendanceCardList from "./AttendanceCardList";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import {
  People,
  PersonAddAlt1,
  PersonRemove,
  Percent,
} from "@mui/icons-material";
import { BarChart } from "@mui/x-charts/BarChart";
const palette = ["green", "red"];
const size = {
  width: 400,
  height: 240,
};
const AttendanceGraphChart = ({ cookies, StuData }) => {
  let data = [
    { value: StuData?.presentDays, label: "Present" },
    { value: StuData?.absentDays, label: "Absent" },
  ];
  const GridStyle = {
    p: 2,
    mb: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    width: "80px",
    height: "80px",
    color: "#fff",
  };
 const chartOptions = {
   categoryGapRatio: 0.4,
   barGapRatio: 0.1,
 };
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#AB47BC"}
      icon={<PieChartIcon />}
      text={"Student attendance graphical representation"}
    >
      <Grid container spacing={2} sx={GridStyle}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={GridStyle}>
          <PieChart
            colors={palette}
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 45,
                data,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontWeight: "bold",
              },
            }}
            {...size}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} sx={GridStyle}>
          <BarChart
            colors={palette}
            series={[
              {
                data: [StuData?.presentDays],
                stack: "A",
                label: "Present",
              },
              {
                data: [StuData?.absentDays],
                stack: "B",
                label: "Absent",
              },
            ]}
            options={chartOptions}
            {...size}
          />
        </Grid>
        <AttendanceCardList
          topColor={"#AB47BC"}
          icon={<People sx={iconStyle} />}
          quantity={StuData?.totalAttendanceDays}
          bottomColor={"#4A148C"}
          text={"Number Of attendance days"}
          cookies={cookies}
        />
        <AttendanceCardList
          topColor={"#EC407A"}
          icon={<Percent sx={iconStyle} />}
          quantity={StuData?.attendancePercentage}
          bottomColor={"#880E4F"}
          text={"Attendance percentage"}
          cookies={cookies}
        />
        <AttendanceCardList
          topColor={"#4CAF50"}
          icon={<PersonAddAlt1 sx={iconStyle} />}
          quantity={StuData?.presentDays}
          bottomColor={"#1B5E20"}
          text={"Number of present days"}
          cookies={cookies}
        />
        <AttendanceCardList
          topColor={"#EF5350"}
          icon={<PersonRemove sx={iconStyle} />}
          quantity={StuData?.absentDays}
          bottomColor={"#B71C1C"}
          text={"Number of absent days"}
          cookies={cookies}
        />
      </Grid>
    </PaperWrapper>
  );
};

export default memo(AttendanceGraphChart);
