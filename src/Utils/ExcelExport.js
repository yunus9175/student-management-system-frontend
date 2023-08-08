import { Button } from "@mui/material";
import React, { memo } from "react";
import { utils, writeFile } from "xlsx";
import { useCookies } from "react-cookie";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { gradientBackground } from "./stylingMethods";
const ExcelExport = ({ userData, data, fileName }) => {
  const [cookies] = useCookies(["theme"]);
  const getYear = (yearNumber) => {
    switch (yearNumber) {
      case 1:
        return "One year";
      case 2:
        return "Two years";
      case 3:
        return "Three years";
      case 4:
        return "Four years";
      case 5:
        return "Five years";
      default:
        return "";
    }
  };
  const isAdmin = userData?.role === "Admin";

  const filteredData = isAdmin
    ? data?.filter((i) => i.role !== "Admin")
    : data?.filter(
        (i) =>
          i?.active === true &&
          i?.course === userData?.course &&
          i?.courseYear === userData?.courseYear
      );

  const UniqueData =
    fileName === "courses_records"
      ? filteredData?.map((item) => {
          const { __v, profileImage, course, years, ...filteredItem } = item;

          return {
            ...filteredItem,
            course: item?.course?.value,
            years: getYear(item?.years?.length),
          };
        })
      : filteredData?.map((obj) => ({
          ...obj,
          profileImage: null,
        }));

  const keysArray =
    UniqueData?.length > 0 && UniqueData[0]
      ? Object.keys(UniqueData[0]).filter((key) =>
          fileName === "courses_records"
            ? key !== "__v" && key !== "profileImage"
            : key !== "__v"
        )
      : [];

  const exportToExcel = () => {
    const headings = [keysArray];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, UniqueData, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, `${fileName}.xlsx`);
  };

  return (
    <Button
      variant="outlined"
      startIcon={<FileDownloadIcon />}
      sx={{
        textTransform: "capitalize",
        color: cookies.theme === "dark" ? "#fff" : "#1976D2",
        background: cookies.theme === "dark" && gradientBackground("#1976D2"),
      }}
      onClick={exportToExcel}
    >
      Export
    </Button>
  );
};

export default memo(ExcelExport);
