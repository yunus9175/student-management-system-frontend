import { Box, Grid } from "@mui/material";
import React, { memo, useState } from "react";
import CustomDatePicker from "./CustomDatePicker";
import StudentCards from "./StudentCards";

const ViewAttendance = ({
  cookies,
  AttData,
  userData,
  data,
  getAttendance,
}) => {
  const inputDate = new Date();
  const isoDate = inputDate.toISOString();
  const formattedDate = isoDate.slice(0, 10);
  const [startDate, setStartDate] = useState(formattedDate);
  const Attendance_Data = AttData.filter(
    (i) =>
      i.date === startDate &&
      i?.course === userData?.course &&
      i?.courseYear === userData?.courseYear
  );
  const filteredStudents = data.filter((student) =>
    Attendance_Data[0]?.attendance.some(
      (attendance) => attendance._id === student._id
    )
  );
  return (
    <>
      <Box>
        <CustomDatePicker
          cookies={cookies}
          startDate={startDate}
          setStartDate={setStartDate}
        />
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {filteredStudents.map((stud) => {
            return (
              <Grid item xs={12} sm={4} md={3} lg={3} key={stud._id}>
                <StudentCards
                  name={stud.fullName}
                  cookies={cookies}
                  icon={stud.profileImage}
                  present={
                    Attendance_Data?.filter(
                      (i) => i.date === startDate
                    )[0]?.attendance.find(
                      (attendance) => attendance._id === stud._id
                    )?.attendance
                  }
                  attendanceId={
                    Attendance_Data?.filter(
                      (i) => i.date === startDate
                    )[0]?.attendance.find(
                      (attendance) => attendance._id === stud._id
                    )?._id
                  }
                  _id={
                    Attendance_Data?.filter((i) => i.date === startDate)[0]?._id
                  }
                  getAttendance={getAttendance}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default memo(ViewAttendance);
