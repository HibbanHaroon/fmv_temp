import React, { useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import LinearProgressBar from "./components/LinearProgressBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { ReactComponent as CouponIcon } from "../../assets/images/coupon_icon.svg";
import { useMediaQuery } from "@mui/material";

import TypeOfVenue from "./components/TypeOfVenue";
import AboutYourVenue from "./components/AboutYourVenue";
import MultiChipSelector from "./components/MultiChipSelector";
import MessageCard from "./components/MessageCard";
import TickGreenBadgeIcon from "../../assets/icons/TickGreenBadgeIcon";
import LabelledRadioGroup from "./components/LabelledRadioGroup";
import RestaurantCard from "./components/RestaurantCard";
import VenueCard from "./components/VenueCard";
import GradientBlob from "../../components/GradientBlob";

function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);
  const [sameLocation, setSameLocation] = useState("yes");
  const [withAlcoholNumber, setWithAlcoholNumber] = useState(0);
  const [withoutAlcoholNumber, setWithoutAlcoholNumber] = useState(0);
  const [quantityNumber, setQuantityNumber] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const maxSteps = 4;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    console.log(activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStepChange = (step) => {
  //   setActiveStep(step);
  // };

  const handleWithAlcoholNumberChange = (event) => {
    setWithAlcoholNumber(event.target.value);
  };

  const handleWithoutAlcoholNumberChange = (event) => {
    setWithoutAlcoholNumber(event.target.value);
  };

  const handleSameLocationChange = (event) => {
    setSameLocation(event.target.value);
  };

  const handleQuantityNumberChange = (event) => {
    setQuantityNumber(event.target.value);
  };

  const handleButton1Click = () => {
    setSelectedButton(1);
    handleNext();
  };

  const handleButton2Click = () => {
    setSelectedButton(2);
    handleNext();
  };

  const handleContinue = () => {
    console.log(activeStep);
    handleNext();
  };

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
          display: activeStep === 0 ? "flex" : "block",
          justifyContent: activeStep === 0 ? "center" : "initial",
          alignItems: activeStep === 0 ? "center" : "initial",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "90%", md: "55%" },
          }}
        >
          {/* Not visible for step 0 */}
          {activeStep !== 0 && (
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h5"
                variantMapping={{
                  xs: "h5",
                  md: "h4",
                }}
                gutterBottom
                sx={{
                  mt: { xs: 3, md: 3 },
                  fontWeight: "600",
                }}
              >
                Tell us more about your venue
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: "500",
                  textAlign: "center",
                  color: "grey.text",
                  mb: 5,
                }}
              >
                This will help us find a better plan for you
              </Typography>
              {activeStep !== 1 && (
                <Button
                  variant="contained"
                  startIcon={<CouponIcon />}
                  sx={{
                    py: 1,
                    backgroundColor: "green.light",
                    color: "green.text",
                    textTransform: "none",
                    mt: "1rem",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "rgba(3, 159, 141, 0.2)",
                    },
                  }}
                  fullWidth
                >
                  Start your Free 6 Month Trial
                </Button>
              )}
            </Box>
          )}
          {/* Type Of Venue Card I */}
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

          {/* {activeStep === 1 && <MultiChipSelector />} */}

          {activeStep === 1 && (
            <>
              <LabelledRadioGroup
                label="Would you like to list your stay along with the venues for events?"
                // Any other props needed for LabelledRadioGroup
              />
              <RestaurantCard
                withAlcoholNumber={withAlcoholNumber}
                withoutAlcoholNumber={withoutAlcoholNumber}
                handleWithAlcoholNumberChange={handleWithAlcoholNumberChange}
                handleWithoutAlcoholNumberChange={
                  handleWithoutAlcoholNumberChange
                }
              />
              <VenueCard
                toolTipText={
                  "Make sure all the venues are part of the same hotel for example ballroom, meeting room, beach, lawn"
                }
                title={"Venues"}
                description={"All venues which are not restaurants"}
                handleSameLocationChange={handleSameLocationChange}
                quantityNumber={quantityNumber}
                handleQuantityNumberChange={handleQuantityNumberChange}
              />
            </>
          )}

          {activeStep === 3 && (
            <MessageCard
              loaderComponent={<TickGreenBadgeIcon />}
              primaryText="Payment Successful"
              secondaryText="Creating your dashboard experience..."
            />
          )}

          {activeStep >= 1 && (
            <Box sx={{ width: "100%", mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  textTransform: "none",
                  mt: "1rem",
                  boxShadow: "none",
                  width: { xs: "100%", md: "70%" },
                }}
                onClick={handleContinue}
              >
                Continue
              </Button>
            </Box>
          )}
        </Container>
        {activeStep !== 0 && (
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
