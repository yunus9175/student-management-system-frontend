import React, { memo } from "react";
import {
  CardActionArea,
  CardActions,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CardName } from "./CardName";
import useMediaQuery from "@mui/material/useMediaQuery";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "./stylingMethods";
import {
  CardBorder,
  Dark00,
  Dark00FF,
  DarkFFF,
  IconColor,
} from "./CommonCookies";
import ReplyIcon from "@mui/icons-material/Reply";
const CustomCard = ({
  item,
  handleEdit,
  handleActive,
  parentComp,
  cookies,
  isAdmin,
  handleClickOpen,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const matches = useMediaQuery("(min-width:600px)");

  const hiddenStyle = {
    width: matches ? "100%" : "17rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: DarkFFF(cookies),
    textTransform: "capitalize",
  };
  const hiddenStyle1 = {
    width: matches ? "100%" : "17rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: DarkFFF(cookies),
  };
  // const randomIndex = Math.floor(Math.random() * colors.length);
  // const bgColor = colors[randomIndex];
  const cookieCondition = () => {
    if (cookies.theme === "dark") {
      return {
        background: Dark00FF(cookies),
        color: "#fff",
        border: CardBorder(cookies, "#1976D2"),
      };
    }
  };

  return (
    <Card elevation={0} sx={cookieCondition()}>
      <CardActionArea
        onClick={() => {
          ["View Records", "Manage Teachers"].includes(parentComp) &&
            handleEdit(item._id);
        }}
      >
        <CardMedia
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            pt: 2,
          }}
        >
          <Avatar
            src={item.profileImage}
            sx={{
              background: Dark00(cookies),
              color: "#1976D2",
              width: 80,
              height: 80,
              fontSize: "40px",
              border: "1px solid #1976D2",
            }}
          >
            {CardName(`${item.fullName}`)}
          </Avatar>
        </CardMedia>
        <CardContent sx={{ pl: 2, pr: 2, pt: 0, pb: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={hiddenStyle}
          >
            {item?.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={hiddenStyle1}>
            {item?.email}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: DarkFFF(cookies), textTransform: "capitalize" }}
          >
            {item?.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          pl: 2,
          pr: 2,
          pt: 0,
          pb: 1,
        }}
      >
        {(parentComp === "View Records" ||
          parentComp === "Manage Teachers") && (
          <Tooltip title="Edit" placement="top">
            <IconButton onClick={() => handleEdit(item._id)}>
              <EditIcon sx={{ fontSize: 20, color: IconColor(cookies) }} />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip
          title={item.active === false ? "Inactive" : "Active"}
          placement="top"
        >
          <IconButton
            onClick={() => {
              item.active === false
                ? handleActive(true, item._id)
                : handleActive(false, item._id);
            }}
          >
            {" "}
            {item.active === false ? (
              <CancelIcon sx={{ fontSize: 20, color: "#EF5350" }} />
            ) : (
              <CheckCircleIcon sx={{ fontSize: 20, color: "#4CAF50" }} />
            )}
          </IconButton>
        </Tooltip>
        {parentComp === "Manage Queries" && (
          <>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon sx={{ color: "#1976D2" }} />
            </ExpandMore>
            {isAdmin && (
              <Tooltip title={"Reply"} placement="top">
                <IconButton onClick={() => handleClickOpen(item._id)}>
                  <ReplyIcon sx={{ color: "#1976D2" }} />
                </IconButton>
              </Tooltip>
            )}
          </>
        )}
      </CardActions>
      {parentComp === "Manage Queries" && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comment:</Typography>
            <Typography paragraph>{item?.comment}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};

export default memo(CustomCard);
