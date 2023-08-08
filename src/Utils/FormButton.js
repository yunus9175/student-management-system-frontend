import { Grid } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";

const FormButton = ({ text, loading }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
      >
        <CustomButton text={text} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default FormButton;
