import { Box, Paper, Typography } from '@mui/material';
import moment from 'moment';
import React,{memo} from 'react'

const TopSection = ({ AttData }) => {
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

      <Typography
        sx={{
          color: "#fff",
          fontSize: "20px",
        }}
      >
        Date: {moment(AttData?.date).format("LL")}
      </Typography>
    </Paper>
  );
};

export default memo(TopSection)