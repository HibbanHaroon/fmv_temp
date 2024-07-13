import React from "react";
import { Button, Typography, Box } from "@mui/material";
import Tooltip from "../../../components/Tooltip";
import { useTheme } from "@mui/material/styles";

function IconButtonWithTooltip({
  label,
  icon,
  isSelectedButton,
  handleButtonClick,
}) {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        height: "48px",
        borderRadius: "8px",
        boxShadow: "none",
        color: isSelectedButton
          ? theme.palette.primary.main
          : theme.palette.grey.text,
        backgroundColor: isSelectedButton
          ? theme.palette.primary.light
          : theme.palette.common.white,
        border: `1px solid ${
          isSelectedButton
            ? theme.palette.primary.main
            : theme.palette.grey.border
        }`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "12px",
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
          "& .icon": {
            color: theme.palette.primary.main,
          },
        },
      }}
      onClick={handleButtonClick}
    >
      <Box className="icon" sx={{ marginRight: 2 }}>
        {icon}
      </Box>
      <Typography
        sx={{
          textTransform: "none",
          fontSize: "0.8rem",
          textAlign: "left",
          flexGrow: 1,
        }}
      >
        {label}
      </Typography>
      <Box sx={{ marginLeft: "auto" }}>
        <Tooltip text="Hello" />
      </Box>
    </Button>
  );
}

export default IconButtonWithTooltip;
