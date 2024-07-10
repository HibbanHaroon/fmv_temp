import React from "react";
import { Divider } from "@mui/material";

const CustomDivider = ({
  orientation = "horizontal",
  variant = "middle",
  color = "grey.text",
  flexItem = false,
}) => {
  return (
    <Divider
      orientation={orientation}
      variant={variant}
      sx={{ color }}
      flexItem={flexItem ? true : undefined}
    />
  );
};

export default CustomDivider;
