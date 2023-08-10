import { Link } from "@mui/material";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { DarkFFF } from "./CommonCookies";

const LinkComp = ({ path, text, cookies }) => {
  const pathname = ["/sign_in", "/forgot-password", "/reset-password"].includes(
    window.location.pathname
  );
  const navigate = useNavigate();
  return (
    <Link
      sx={{
        color: pathname ? "#FFF !important" : DarkFFF(cookies),
      }}
      component="button"
      variant="body2"
      onClick={() => navigate(path)}
    >
      {text}
    </Link>
  );
};

export default memo(LinkComp);
