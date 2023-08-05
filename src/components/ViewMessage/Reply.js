import React, { memo } from "react";
import { Button, Dialog, DialogActions, Grid } from "@mui/material";
import CustomTextField from "../../Utils/CustomTextField";
import PaperWrapper from "../../Utils/PaperWrapper";
import CustomMultilineTextField from "../../Utils/CustomMultilineTextField";
import { IconColor } from "../../Utils/CommonCookies";
const Reply = ({
  cookies,
  formData,
  setFormData,
  loading,
  open,
  handleClose,
  handleSubmit,
}) => {
  return (
    <Dialog
      open={open}
      maxWidth="xs"
      onClose={handleClose}
      component="form"
      onSubmit={handleSubmit}
    >
      <PaperWrapper
        cookies={cookies}
        boxBGColor={"#1976D2"}
        text={"Submit your replay"}
      >
        <Grid container spacing={2} sx={{ p: 2, mb: 1 }}>
          <Grid item xs={12} sm={12} md={12}>
            <CustomTextField
              label={"Email Address"}
              name="email"
              value={formData.email}
              setFormData={setFormData}
              type="email"
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CustomTextField
              label={"Subject"}
              name="subject"
              value={formData.subject}
              setFormData={setFormData}
              type="text"
              disabled={false}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <CustomMultilineTextField
              label={"Your reply"}
              name="reply"
              value={formData.reply}
              setFormData={setFormData}
              type="text"
              disabled={false}
            />
          </Grid>
        </Grid>
        <DialogActions>
           <Button
            variant="text"
            onClick={handleClose}
            sx={{ color: IconColor(cookies) }}
          >
            Cancel
          </Button>
          <Button
            type="text"
            variant="text"
            disabled={loading}
            sx={{ color: IconColor(cookies) }}
          >
            {loading ? "Loading..." : "Submit your reply"}
          </Button>
        </DialogActions>
      </PaperWrapper>
    </Dialog>
  );
};

export default memo(Reply);
