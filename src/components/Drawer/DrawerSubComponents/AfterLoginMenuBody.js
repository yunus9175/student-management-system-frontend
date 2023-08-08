import React, { memo } from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../../Utils/navLinks";
import ModeComp from "../../../Utils/ModeComp";
import DialogBox from "../../../Utils/DialogBox";
import MenuWrapper from "../../../Utils/MenuWrapper";
import {
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DarkFF4F } from "../../../Utils/CommonCookies";
const AfterLoginMenuBody = ({
  open,
  toggleDrawer,
  icon,
  logoutFn,
  dialogOpen,
  DialogClose,
  setDialogOpen,
  setUpDown,
  searchCondition,
  upDown,
  data,
  userData,
  handleNavigate,
  cookies,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuWrapper open={open} toggleDrawer={toggleDrawer} cookies={cookies}>
        <List>
          <ListItem onClick={() => handleNavigate()} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  variant="square"
                  sx={{ width: "24px !important", height: "24px !important" }}
                  src={userData?.profileImage}
                />
              </ListItemIcon>
              <ListItemText
                primary={userData?.fullName}
                sx={{
                  color: DarkFF4F(cookies),
                }}
              />
            </ListItemButton>
          </ListItem>

          {searchCondition() && !upDown && data?.length > 0 && (
            <ListItem
              onClick={() => {
                setUpDown(true);
                toggleDrawer();
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon sx={{ color: DarkFF4F(cookies) }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Search"}
                  sx={{
                    color: DarkFF4F(cookies),
                  }}
                />
              </ListItemButton>
            </ListItem>
          )}

          {navLinks
            .filter(
              (nav) =>
                (nav.path !== window.location.pathname &&
                  nav.LoggedIn === true &&
                  nav.access === userData.role) ||
                nav.access === "both"
            )
            .map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={() => navigate(item.path)}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ color: DarkFF4F(cookies) }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{
                        color: DarkFF4F(cookies),
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          <ListItem
            onClick={() => {
              setDialogOpen(true);
              toggleDrawer();
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: DarkFF4F(cookies) }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={"Logout"}
                sx={{
                  color: DarkFF4F(cookies),
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            p: 1,
          }}
        >
          <ModeComp />
        </Box>
      </MenuWrapper>
      <DialogBox
        open={dialogOpen}
        handleClose={DialogClose}
        handleChange={logoutFn}
        text={"Are your sure you want to exit?"}
      />
    </>
  );
};

export default memo(AfterLoginMenuBody);
