import { Dark00, Dark00FF, DarkFFF } from "../../Utils/CommonCookies";
import { gradientBackground } from "../../Utils/stylingMethods";

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
      background: "#292929",
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
      overflowY: "scroll", // Use "scroll" to show the scrollbar always
      scrollbarWidth: "none", // Hide scrollbar on Firefox
      "-ms-overflow-style": "none", // Hide scrollbar on IE and Edge
      "&::-webkit-scrollbar": {
        width: "10px", // Customize the width of the scrollbar
        background: Dark00(cookies), // Customize the background color of the scrollbar track
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#CCCCCC", // Customize the color of the scrollbar thumb
        borderRadius: "10px", // Customize the border radius of the thumb
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#555", // Customize the color of the thumb on hover
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
      background: gradientBackground("#1976D2"),
      boxShadow: "none",
    },
    toolbarIconBtn = {
      marginRight: 5,
      color: "#fff",
      ...(open && { display: "none" }),
    },
    toolbarIconBtnAvatar = {
      width: 30,
      height: 30,
      color: "#fff",
    },
    innerBox3 = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    titleTypo = {
      color: "#fff",
      fontSize: "24px",
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
    toolbarIconBtnAvatar,
    innerBox3,
    titleTypo,
    childBox1,
    searchIcon,
    searchToolbar,
  };
};
