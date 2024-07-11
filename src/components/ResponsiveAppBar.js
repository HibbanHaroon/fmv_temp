import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../assets/images/logo.svg";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ height: 80 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              height: 40,
              marginRight: 2,
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
