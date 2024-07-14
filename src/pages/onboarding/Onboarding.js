import React, { useState } from "react";
import { Container, Box, Button } from "@mui/material";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import LinearProgressBar from "./components/LinearProgressBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { useMediaQuery } from "@mui/material";

import TypeOfVenue from "./components/TypeOfVenue";
import GradientBlob from "../../components/GradientBlob";
import HotelFlow from "./flows/HotelFlow";
import VenueFlow from "./flows/VenueFlow";

function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);
  const [showBackButton, setShowBackButton] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // For Flows
  const [displayHotelFlow, setDisplayHotelFlow] = useState(false);
  const [displayVenueFlow, setDisplayVenueFlow] = useState(false);

  const maxSteps = 4;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const newStep = prevActiveStep - 1;
      // If going back to step 0, reset the flows
      if (newStep === 0) {
        setDisplayHotelFlow(false);
        setDisplayVenueFlow(false);
      }
      return newStep;
    });
  };

  // For Hotel Flow
  const handleButton1Click = () => {
    setSelectedButton(1);
    setDisplayHotelFlow(true);
    handleNext();
  };

  // For Venue Flow
  const handleButton2Click = () => {
    setSelectedButton(2);
    setDisplayVenueFlow(true);
    handleNext();
  };

  const handleContinue = () => {
    console.log(activeStep);
    handleNext();
  };

  const toggleBackButton = (show) => {
    setShowBackButton(show);
  };

  // Basically for both Type of venue views
  const shouldCenterContent =
    activeStep === 0 || (activeStep === 1 && displayVenueFlow === true);

  return (
    <>
      <ResponsiveAppBar />
      <LinearProgressBar value={((activeStep + 2) / (maxSteps + 2)) * 100} />
      <div
        style={{
          backgroundImage: `url(${backgroundIcon})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          marginTop: "3rem",
          marginBottom: "3rem",
          minHeight: "70vh",
          display: shouldCenterContent ? "flex" : "block",
          justifyContent: shouldCenterContent === 0 ? "center" : "initial",
          alignItems: shouldCenterContent === 0 ? "center" : "initial",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "90%", md: "55%" },
            // p: 0,
            // m: 0,
          }}
        >
          {/* Type Of Venue Card*/}
          {activeStep === 0 && (
            <Box sx={{ width: { xs: "100%", md: "45%" } }}>
              <TypeOfVenue
                title={"Type of Venue"}
                description={
                  "Choose the type of Venue you would want to list this will help us find a suitable plan for your needs"
                }
                buttonLabel1={"Hotel stay + Venues"}
                buttonLabel2={"Venue"}
                handleButton1Click={handleButton1Click}
                handleButton2Click={handleButton2Click}
                selectedButton={selectedButton}
              />
            </Box>
          )}

          {displayHotelFlow && (
            <HotelFlow
              activeStep={activeStep}
              handleContinue={handleContinue}
              toggleBackButton={toggleBackButton}
            ></HotelFlow>
          )}
          {displayVenueFlow && (
            <VenueFlow
              activeStep={activeStep}
              handleContinue={handleContinue}
              toggleBackButton={toggleBackButton}
            ></VenueFlow>
          )}

          {/* {activeStep === 1 && <MultiChipSelector />} */}
        </Container>
        {showBackButton && activeStep !== 0 && (
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: { xs: "7rem", md: "10rem" },
              left: { xs: "2rem", md: "8rem" },
            }}
          >
            <Button
              variant="text"
              startIcon={<KeyboardBackspaceIcon />}
              sx={{ color: "black.text" }}
              onClick={handleBack}
            >
              Back
            </Button>
          </Box>
        )}
        {!isMobile && (
          <>
            <GradientBlob
              positionHorizontal="left"
              positionVertical="top"
            ></GradientBlob>
            <GradientBlob
              positionHorizontal="left"
              positionVertical="bottom"
            ></GradientBlob>
            <GradientBlob
              positionHorizontal="right"
              positionVertical="bottom"
            ></GradientBlob>
          </>
        )}
      </div>
    </>
  );
}

export default Onboarding;
