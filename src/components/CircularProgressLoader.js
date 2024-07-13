import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function CircularProgressLoader({ color }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", mt: 5, mb: 5 }}>
      <CircularProgress
        size={80}
        thickness={2}
        sx={{ color: color || theme.palette.green.text }}
      />
    </Box>
  );
}

export default CircularProgressLoader;
