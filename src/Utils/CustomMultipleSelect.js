import React,{memo} from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import CustomTheme from "./CustomTheme";
import { DarkFFF } from "./CommonCookies";
import { handleChange } from "./HandleChange";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "First Year",
  "Second Year",
  "Third Year",
  "Fourth Year",
  "Fifth Year",
];

const CustomMultipleSelect = ({ label, name, value, setFormData, cookies, }) => {
  return (
    <CustomTheme>
      <Typography
        sx={{
          color: DarkFFF(cookies),
          fontWeight: "500",
          textTransform: "capitalize",
        }}
      >
        {label} <span style={{ color: "red", marginLeft: 5 }}>*</span>
      </Typography>
      <FormControl fullWidth margin="dense" required>
        <Select
          id="demo-multiple-checkbox"
          name={name}
          multiple
          value={value}
          onChange={(e) => handleChange(e, setFormData)}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          size="small"
          displayEmpty
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </CustomTheme>
  );
};

export default memo(CustomMultipleSelect);