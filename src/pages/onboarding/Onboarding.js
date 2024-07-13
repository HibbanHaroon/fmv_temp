import React, { useState } from "react";
import { Container, Box, Button, Typography, Card } from "@mui/material";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import LinearProgressBar from "./components/LinearProgressBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { ReactComponent as CouponIcon } from "../../assets/images/coupon_icon.svg";
import TextfieldNumber from "./components/TextfieldNumber";
import { useTheme } from "@mui/material/styles";

import Tooltip from "../../components/Tooltip";
import LabelledRadioGroup from "./components/LabelledRadioGroup";
import RestaurantCard from "./components/RestaurantCard";
import VenueCard from "./components/VenueCard";

function Onboarding() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [sameLocation, setSameLocation] = useState("yes");
  const [withAlcoholNumber, setWithAlcoholNumber] = useState(0);
  const [withoutAlcoholNumber, setWithoutAlcoholNumber] = useState(0);
  const [quantityNumber, setQuantityNumber] = useState(0);
  const maxSteps = 4;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    console.log(activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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

  return (
    <>
      <ResponsiveAppBar />
      <LinearProgressBar value={30} />
      <div
        style={{
          backgroundImage: `url(${backgroundIcon})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          marginTop: "3rem",
          marginBottom: "3rem",
          minHeight: "60vh",
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
              }}
            >
              This will help us find a better plan for you
            </Typography>
            <Button
              variant="contained"
              startIcon={<CouponIcon />}
              sx={{
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
          </Box>
          {/* Restaurant Card here */}
          <RestaurantCard
            withAlcoholNumber={withAlcoholNumber}
            withoutAlcoholNumber={withoutAlcoholNumber}
            handleWithAlcoholNumberChange={handleWithAlcoholNumberChange}
            handleWithoutAlcoholNumberChange={handleWithoutAlcoholNumberChange}
          ></RestaurantCard>
          {/* Venue Card */}
          {/* <VenueCard
            isLocation={true}
            sameLocation={sameLocation}
            handleSameLocationChange={handleSameLocationChange}
            isOtherText={true}
            otherText={
              "Choose the total no. of venue available in your property"
            }
            quantityNumber={quantityNumber}
            handleQuantityNumberChange={handleQuantityNumberChange}
            title={"Venues"}
            description={"Ballroom, Dance Studio +4"}
          ></VenueCard> */}

          <VenueCard
            quantityNumber={quantityNumber}
            handleQuantityNumberChange={handleQuantityNumberChange}
            title={"Venues"}
            description={"Ballroom, Dance Studio +4"}
          ></VenueCard>
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
            >
              Continue
            </Button>
          </Box>
        </Container>
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
      </div>
    </>
  );
}

export default Onboarding;
