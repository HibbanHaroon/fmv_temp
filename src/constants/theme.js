// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthMd": {
            maxWidth: "700px",
          },
        },
      },
    },
  },
  palette: {
    primary: { main: "#FE4747", light: "#FFEBEB" },
    black: { text: "#222222" },
    white: "#FFFFFF",
    green: { text: "#039F8D", light: "#EAF9F7" },
    grey: { text: "#B0B0B0", border: "#DDDDDD" },
  },
});

export default theme;
