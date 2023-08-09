import { Dark00, Dark00FF, DarkFFF } from "../../Utils/CommonCookies";

export const DrawerStyle = (cookies, matches, upDown, open) => {
  const path = [
    "/manage-students",
    "/manage-queries",
    "/manage-teachers",
  ].includes(window.location.pathname);

  const CommonStyle = "4rem 1rem 0rem";

  const paddingStyle = () => {
    if (!matches && upDown) {
      if (path) {
        return "8rem 1rem 0rem";
      } else {
        return CommonStyle;
      }
    } else if (!matches && !upDown) {
      return CommonStyle;
    } else if (matches) {
      if (path) {
        return CommonStyle;
      } else {
        return CommonStyle;
      }
    } else {
      return "4rem 0rem 0rem";
    }
  };

  const parentBox = {
      display: "flex",
    },
    drawerHeader1 = {
      background: cookies.theme === "dark" ? "#292929" : "#1976D2",
    },
    innerBox1 = {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    iconBtn = {
      marginLeft: "5px",
    },
    iconBtnAvatar = {
      width: 28,
      height: 28,
      color: "#fff",
    },
    dynamicList = {
      pt: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100vh",
      background: cookies.theme === "dark" ? "#4f4f4f" : "#fff",
      // borderRight: cookies.theme === "dark" && "1px solid #1976D2",
    },
    dynamicListBox = {
      paddingTop: !matches && upDown ? "3rem" : 0,
    },
    dynamicListItem = {
      display: "block",
    },
    innerBox2 = {
      flexGrow: 1,
      p: paddingStyle(),
      marginTop: "1rem",
      paddingBottom: "10px",
      backgroundColor: Dark00(cookies),
      height: "97.9vh",
      overflowY: "scroll",
      scrollbarWidth: "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        width: "10px",
        background: cookies.theme === "dark" ? "#292929" : "#E7EBF0",
      },
      "&::-webkit-scrollbar-thumb": {
        background: cookies.theme === "dark" ? "#4F4F4F" : "#CCCCCC",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: cookies.theme === "dark" ? "#4F4F4F" : "#CCCCCC",
      },
    },
    listItemBtn = {
      minHeight: 48,
      justifyContent: open ? "initial" : "center",
      px: 2.5,
      "&.Mui-selected": {
        background: cookies.theme === "dark" ? "#292929" : "#E7EBF0",
        ":hover": {
          background: cookies.theme === "dark" ? "#292929" : "#E7EBF0",
        },
      },
    },
    innerAvatar = {
      minWidth: 0,
      mr: open ? 3 : "auto",
      justifyContent: "center",
      width: 30,
      height: 30,
      color: cookies.theme === "dark" ? "#fff" : "#1976D2",
      alignItems: "center",
    },
    listItemText = {
      opacity: open ? 1 : 0,
      color: cookies.theme === "dark" ? "#fff" : "#1976D2",
      pb: 0,
    },
    appBar = {
      background: cookies.theme === "dark" ? "#292929" : "#1976D2",
      boxShadow: "none",
    },
    toolbarIconBtn = {
      marginRight: matches ?5:1,
      color: "#fff",
      ...(open && { display: "none" }),
    },
    toolbarIconBtn1 = {
      color: "#fff",
    },
    toolbarIconBtnAvatar = {
      width: matches ?30:24,
      height: matches ?30:24,
      color: "#fff",
    },
    innerBox3 = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    titleTypo = {
      color:  "#fff",
      fontSize: matches ? "24px" : "20px",
    },
    childBox1 = {
      display: "flex",
      alignItems: "center",
    },
    searchIcon = {
      color: DarkFFF(cookies),
      fontSize: "20px",
    },
    searchToolbar = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: Dark00FF(cookies),
      padding: "1rem",
    };

  return {
    parentBox,
    drawerHeader1,
    innerBox1,
    iconBtn,
    iconBtnAvatar,
    dynamicList,
    dynamicListBox,
    dynamicListItem,
    innerBox2,
    listItemBtn,
    innerAvatar,
    listItemText,
    appBar,
    toolbarIconBtn,
    toolbarIconBtn1,
    toolbarIconBtnAvatar,
    innerBox3,
    titleTypo,
    childBox1,
    searchIcon,
    searchToolbar,
  };
};
