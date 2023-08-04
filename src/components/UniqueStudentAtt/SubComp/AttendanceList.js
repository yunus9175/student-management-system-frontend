import React, { memo } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
} from "@mui/material";
import { CardBorder } from "../../../Utils/CommonCookies";
import moment from "moment";
const AttendanceList = ({ cookies, data, index }) => {
  const topColor = data?.attendance ? "#4CAF50" : "#EF5350",
    bottomColor = data?.attendance ? "#1B5E20" : "#B71C1C";
  return (
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
            p:2,
          }}
        >
          <Avatar
            sx={{
              background: bottomColor,
              width: 80,
              height: 80,
              fontSize:36
            }}
          >
            {data?.attendance ? "A" : "P"}
          </Avatar>
        </Box>
        <CardContent sx={{ p: "10px", background: bottomColor }}>
          <Typography
            sx={{
              fontSize:"20px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            {moment(data?.date).format("LL")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default memo(AttendanceList);
