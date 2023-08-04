import React, { memo } from "react";
import PaperWrapper from "./PaperWrapper";
import { Grid } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { Gender } from "./DropdownArray";
import CustomDateTextField from "./CustomDateTextField";
import CustomDropDown from "./CustomDropDown";
import { Person } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { Box, IconButton, Tooltip } from "@mui/material";
import { PhotoCamera, HighlightOff } from "@mui/icons-material";
import { Dark00 } from "./CommonCookies";
import { useSelector } from "react-redux";

const PersonalInfo = ({
  handleFileInputChange,
  selectedFile,
  handleClear,
  cookies,
  formData,
  setFormData,
}) => {
  const { userData } = useSelector((state) => state.getUserProfile);
  const isAdmin = userData.role === "Admin";
  const pathname = window.location.pathname;

  const HiddenCondition = () => {
    if (isAdmin) {
      const pathArray = [
        "/manage-students-account",
        "/manage-students-account/:id",
      ];
      const hasManageUsers = pathArray.includes(pathname);

      const condition1 =
        pathname.startsWith("/manage-students-account/") &&
        pathname !== "/manage-students-account/";

      return hasManageUsers || condition1;
    } else if (!isAdmin) {
      const pathArray = ["/manage-students", "/manage-students/:id"];
      const hasManageUsers = pathArray.includes(pathname);
      const condition3 =
        pathname.startsWith("/manage-students/") &&
        pathname !== "/manage-students/";

      return hasManageUsers || condition3;
    } else {
      return false;
    }
  };
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#EF5350"}
      icon={<Person />}
      text={"Personal Info"}
    >
      <Grid
        container
        spacing={2}
        sx={{
          p: 2,
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={3} md={3}>
          <Box sx={{ pt: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={selectedFile}
                alt="user Edit Profile"
                variant="circular"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  border: "1px solid #EF5350",
                  background: Dark00(cookies),
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton aria-label="upload picture" component="label">
                <input
                  hidden
                  name="profileImage"
                  accept="image/*"
                  type="file"
                  onChange={handleFileInputChange}
                />
                <Tooltip title="Select Image" placement="left">
                  <PhotoCamera sx={{ fontSize: "20px" }} />
                </Tooltip>
              </IconButton>

              <IconButton onClick={handleClear}>
                <Tooltip title="Remove Image" placement="right">
                  <HighlightOff sx={{ fontSize: "20px" }} />
                </Tooltip>
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid container item xs={12} sm={9} md={9} spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={12} sm={6} md={6}>
            <CustomTextField
              label={"full name"}
              name="fullName"
              value={formData.fullName}
              setFormData={setFormData}
              type="text"
              disabled={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <CustomTextField
              label={"email address"}
              name="email"
              value={formData.email}
              setFormData={setFormData}
              type="email"
              disabled={
                window.location.pathname === "/manage-account" ? true : false
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CustomTextField
              label={"mobile number"}
              name="phone"
              value={formData.phone}
              setFormData={setFormData}
              type="number"
              disabled={false}
            />
          </Grid>
          {HiddenCondition() && (
            <Grid item xs={12} sm={6} md={6}>
              <CustomDateTextField
                label={"date of birth"}
                name="dob"
                value={formData.dob}
                setFormData={setFormData}
              />
            </Grid>
          )}
          {HiddenCondition() && (
            <Grid item xs={12} sm={6} md={6}>
              <CustomDropDown
                label={"gender"}
                name="gender"
                value={formData.gender}
                setFormData={setFormData}
                data={Gender}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default memo(PersonalInfo);
