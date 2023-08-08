import { Box, Drawer, IconButton } from "@mui/material";
import React, { memo } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Dark00, DarkFF4F } from "./CommonCookies";
const MenuWrapper = ({ open, toggleDrawer, children, cookies }) => {
  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          style: {
            zIndex: 1500, // Set a high z-index value
          },
        }}
      >
        <Box
          sx={{ width: 240, background: Dark00(cookies), height: "100vh" }}
          role="presentation"
        >
          <IconButton onClick={toggleDrawer}>
            <CloseIcon sx={{ color: DarkFF4F(cookies) }} />
          </IconButton>
          {children}
        </Box>
      </Drawer>
    </>
  );
};

export default memo(MenuWrapper);
