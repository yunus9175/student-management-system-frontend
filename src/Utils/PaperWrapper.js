import { Paper, Typography, Box } from "@mui/material";
import { CardBorder, Dark00FF } from "./CommonCookies";
import React, { memo } from "react";
import { gradientBackground } from "./stylingMethods";

const PaperWrapper = ({ children, cookies, boxBGColor, icon, text }) => {
  const MarginBottom = ()=>{
    if(["/manage-departments","/manage-queries"].includes(window.location.pathname)){
      return 0
    }
    else{
      return 3
    }
  }
  return (
    <Paper
      elevation={3}
      sx={{
        mb: MarginBottom(),
        background: Dark00FF(cookies),
        border: CardBorder(cookies, boxBGColor),
        padding: "0px !important",
        mt: text ? 0 : 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "5px",
          background: gradientBackground(boxBGColor),
          color: "#fff",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        {icon}
        <Typography sx={{ fontSize: 18, fontWeight: "bold", ml: 1 }}>
          {text}
        </Typography>
      </Box>
      {children}
    </Paper>
  );
};

export default memo(PaperWrapper);
