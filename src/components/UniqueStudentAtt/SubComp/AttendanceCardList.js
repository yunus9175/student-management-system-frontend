import React, { memo } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,Box
} from "@mui/material";
import { CardBorder } from "../../../Utils/CommonCookies";
const AttendanceCardList = ({
  cookies,
  topColor,
  icon,
  quantity,
  bottomColor,
  text,
}) => {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
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
              padding: "20px",
            }}
          >
            {icon}
            <Typography sx={{ fontSize: "30px", color: "#fff" }}>
              {quantity}
            </Typography>
          </Box>
          <CardContent sx={{ p: "10px", background: bottomColor }}>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#fff",
                textAlign: "center",
                minWidth: "12rem",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default memo(AttendanceCardList);
