import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box, useMediaQuery } from "@mui/material";
import successful_register_image from "../assets/images/successful_register_image.svg";

function RegistrationSuccessfulMessage() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));

  const getImageStyle = () => {
    if (isXs) {
      return { width: "40px", height: "40px" };
    }
    if (isSm) {
      return { width: "70px", height: "70px" };
    }
    if (isMd) {
      return { width: "90px", height: "90px" };
    }
    if (isLg) {
      return { width: "110px", height: "110px" };
    }
    return { width: "110px", height: "110px" };
  };

  return (
    <Box sx={{ display: "flex", marginLeft: { xs: 1, sm: 6, md: 0 } }}>
      <img
        src={successful_register_image}
        alt="Successful Celebration"
        style={{ ...getImageStyle() }}
        className="mirrored-image"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: { xs: 2, sm: 4, md: 8 },
          marginRight: { xs: 2, sm: 4, md: 8 },
          marginTop: { xs: 2, sm: 3, md: 6 },
        }}
      >
        <Typography
          variant={{ xs: "body1", sm: "h6", md: "h5" }}
          sx={{ fontWeight: "500" }}
        >
          <span style={{ color: "#FE4747" }}>Thank You!</span> For Registering
          With Us
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#B0B0B0", fontWeight: "500" }}
        >
          Your details have been submitted!
        </Typography>
      </Box>
      <img
        src={successful_register_image}
        alt="Successful Celebration"
        style={getImageStyle()}
      />
    </Box>
  );
}

export default RegistrationSuccessfulMessage;
