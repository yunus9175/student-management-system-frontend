import React,{memo} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomTheme from "./CustomTheme";
import Header from "./Header";
import { Grid, Paper, Typography } from "@mui/material";
import LinkComp from "./LinkComp";
import { Dark00 } from "./CommonCookies";
const BoxWrapper = ({
  cookies,
  text,
  handleSubmit,
  children,
  linkText,
  path,
  maxWidth,
  userType,
}) => {
  return (
    <CustomTheme>
      <Header />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: Dark00(cookies),
        }}
      >
        <Container component="main" maxWidth={maxWidth}>
          <CssBaseline />
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 0,
              background: Dark00(cookies),
            }}
          >
            <Typography
              sx={{
                color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {text}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 3,
                width: "-webkit-fill-available",
              }}
            >
              {children}
            </Box>
            {userType === "teacher" && (
              <Grid container maxWidth="xs" justifyContent={"center"}>
                <Grid item>
                  <LinkComp text={linkText} path={path} cookies={cookies} />
                </Grid>
              </Grid>
            )}
          </Paper>
        </Container>
      </Box>
    </CustomTheme>
  );
};

export default memo(BoxWrapper);
