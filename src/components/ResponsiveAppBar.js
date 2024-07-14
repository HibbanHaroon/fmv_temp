import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../assets/images/logo.svg";

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              height: 50,
              marginRight: 2,
              py: 2,
              pl: 4,
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
