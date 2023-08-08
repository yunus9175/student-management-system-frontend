import React, { memo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import CustomTheme from "./CustomTheme";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import ModeComp from "./ModeComp";
import BeforeLoginMenuBody from "./BeforeLoginMenuBody";
import { gradientBackground } from "./stylingMethods";
const Header = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const CommonCode = (link, title) => {
    if (window.location.pathname === link) {
      return null;
    } else {
      return (
        <CustomTheme>
          <Link
            variant="button"
            color="text.primary"
            onClick={() => navigate(link)}
            sx={{
              cursor: "pointer",
              textTransform: "capitalize",
              padding: "5px",
              textDecoration: "none",
              width: "100%",
              textAlign: "center",
              color: "#fff",
              "&:hover": {
                background: !matches && "#1976D2",
                color: !matches && "#fff",
              },
            }}
          >
            {title}
          </Link>
        </CustomTheme>
      );
    }
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        background:gradientBackground("#1976D2"),
        color: "#fff",
        height: "64px",
      }}
      elevation={0}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => {
            window.location.pathname !== "/admin/sign_in" && navigate("/");
          }}
        >
          StudentsTracker
        </Typography>
        {window.location.pathname === "/admin/sign_in" ? (
          <ModeComp />
        ) : (
          <>
            {!matches ? (
              <>
                <IconButton
                  aria-label="menu"
                  onClick={toggleDrawer}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <MenuIcon sx={{ width: 24, height: 24, color: "#fff" }} />
                </IconButton>
              </>
            ) : (
              <nav>
                {CommonCode("/", "Home")}
                {CommonCode("/sign_in", "Sign in")}
                <ModeComp />
              </nav>
            )}
          </>
        )}
      </Toolbar>
      <BeforeLoginMenuBody open={open} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
};

export default memo(Header);
