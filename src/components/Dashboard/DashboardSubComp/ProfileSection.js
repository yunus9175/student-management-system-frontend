import React, { useState, memo } from "react";
import { Grid, Paper, Box, Divider } from "@mui/material";
import { Settings, PowerSettingsNew } from "@mui/icons-material/";
import Avatar from "@mui/material/Avatar";
import { StyledBadge, gradientBackground } from "../../../Utils/stylingMethods";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../../Utils/DialogBox";
import { fetchData } from "../../../app/reducer/getUserProfile";
import {
  CardBorder,
  Dark00FF,
  DarkFF4F,
  DarkFFF,
} from "../../../Utils/CommonCookies";
import { useMediaQuery } from "@mui/material";
const ProfileSection = ({ removeCookie, cookies }) => {
  const matches = useMediaQuery("(min-width:600px)");
  const { userData } = useSelector((state) => state.getUserProfile);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => {
    setDialogOpen(false);
  };
  const logoutFn = () => {
    removeCookie("loggedIn");
    removeCookie("UserId");
    dispatch(
      fetchData({
        userData: {},
      })
    );
    navigate("/");
  };

  const redirectToProfile = () => {
    if (cookies?.UserType === "Admin") {
      navigate("/manage-profile");
    }
    else{
      navigate("/manage-account");
    }
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Paper
          elevation={0}
          sx={{
            height: "275px",
            background: Dark00FF(cookies),
            border: CardBorder(cookies, "#1976D2"),
            borderRadius: 0,
            overflowY: "scroll",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            scrollbarWidth: "none", // hide scrollbar on Firefox
            "&::-webkit-scrollbar": {
              width: 0,
              height: 0,
            },
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    sx={{
                      width: 90,
                      height: 90,
                      border: "1px solid #1976D2",
                    }}
                    src={userData?.profileImage}
                  />
                </StyledBadge>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={8}
              lg={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: !matches && "center",
              }}
            >
              {" "}
              <Box>
                <ListItemText
                  sx={{
                    fontSize: "20px !important",
                    color: DarkFFF(cookies),
                    fontWeight: "bold",
                  }}
                  primary={userData?.fullName}
                />

                <ListItemText
                  sx={{
                    fontSize: "15px",
                    color: DarkFF4F(cookies),
                  }}
                  primary={`Email: ${userData?.email}`}
                />
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <Box sx={{ padding: "20px" }}>
            <ListItemButton
              sx={{
                borderRadius: 1,
                background: gradientBackground("#0288D1"),
                mb: 1,
                color: "#fff",
                "&:hover": {
                  background: gradientBackground("#0288D1"),
                  mb: 1,
                  color: "#fff",
                },
              }}
              onClick={() => redirectToProfile()}
            >
              <ListItemIcon>
                <Settings sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Account Settings" />
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: 1,
                background: gradientBackground("#00796B"),
                color: "#fff",
                "&:hover": {
                  background: gradientBackground("#00796B"),
                  color: "#fff",
                },
              }}
              onClick={() => setDialogOpen(true)}
            >
              <ListItemIcon>
                <PowerSettingsNew sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Box>
        </Paper>
      </Grid>
      <DialogBox
        open={dialogOpen}
        handleClose={handleClose}
        handleChange={logoutFn}
        text={"Are your sure you want to exit?"}
        cookies={cookies}
      />
    </>
  );
};

export default memo(ProfileSection);
