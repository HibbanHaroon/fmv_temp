import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButtonWithTooltip from "./IconButtonWithTooltip";
import HotelIcon from "../../../assets/icons/HotelIcon";
import VenueIcon from "../../../assets/icons/VenueIcon";

function TypeOfVenue({
  title,
  description,
  buttonLabel1,
  buttonLabel2,
  selectedButton,
  handleButton1Click,
  handleButton2Click,
}) {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { md: "center" },
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, color: theme.palette.grey.text }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          py: 3,
          borderRadius: 8,
          textAlign: "center",
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            width: "100%",
          }}
        >
          <IconButtonWithTooltip
            label={buttonLabel1}
            icon={
              <HotelIcon
                width={24}
                height={24}
                color={
                  selectedButton === 1
                    ? theme.palette.primary.main
                    : theme.palette.grey.text
                }
              />
            }
            isSelectedButton={selectedButton === 1}
            handleButtonClick={handleButton1Click}
          />
          <IconButtonWithTooltip
            label={buttonLabel2}
            icon={
              <VenueIcon
                width={24}
                height={24}
                color={
                  selectedButton === 2
                    ? theme.palette.primary.main
                    : theme.palette.grey.text
                }
              />
            }
            isSelectedButton={selectedButton === 2}
            handleButtonClick={handleButton2Click}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default TypeOfVenue;
