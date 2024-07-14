import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import TitleDescriptionCoupon from "../components/TitleDescriptionCoupon";
import LabelledRadioGroup from "../components/LabelledRadioGroup";
import RestaurantCard from "../components/RestaurantCard";
import VenueCard from "../components/VenueCard";
import MessageCard from "../components/MessageCard";
import CircularProgressLoader from "../../../components/CircularProgressLoader";

function HotelFlow({ activeStep, handleContinue, toggleBackButton }) {
  const [withAlcoholNumber, setWithAlcoholNumber] = useState(0);
  const [withoutAlcoholNumber, setWithoutAlcoholNumber] = useState(0);
  const [quantityNumber, setQuantityNumber] = useState(0);

  const handleWithAlcoholNumberChange = (event) => {
    setWithAlcoholNumber(event.target.value);
  };

  const handleWithoutAlcoholNumberChange = (event) => {
    setWithoutAlcoholNumber(event.target.value);
  };

  const handleQuantityNumberChange = (event) => {
    setQuantityNumber(event.target.value);
  };

  useEffect(() => {
    if (activeStep === 2) {
      toggleBackButton(false);
    } else {
      toggleBackButton(true);
    }
  }, [activeStep, toggleBackButton]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      {activeStep === 1 && (
        <Box sx={{ width: "100%" }}>
          <TitleDescriptionCoupon />
          <Box sx={{ height: "2rem" }}></Box>
          <LabelledRadioGroup
            label={
              "Would you like to list your stay along with venues for events?"
            }
          />
          <RestaurantCard
            description={"How many restaurants you own and manage"}
            withAlcoholNumber={withAlcoholNumber}
            withoutAlcoholNumber={withoutAlcoholNumber}
            handleWithAlcoholNumberChange={handleWithAlcoholNumberChange}
            handleWithoutAlcoholNumberChange={handleWithoutAlcoholNumberChange}
          />
          <VenueCard
            title={"Venues"}
            description={"All venues which are not restaurants"}
            toolTipText={
              "Make sure all the venues are part of the same hotel for example ballroom, meeting room, beach, lawn"
            }
            quantityNumber={quantityNumber}
            handleQuantityNumberChange={handleQuantityNumberChange}
          />
        </Box>
      )}
      {activeStep === 2 && (
        <MessageCard
          loaderComponent={<CircularProgressLoader color={"red"} />}
          primaryText={"Creating a plan suitable to your venue"}
          secondaryText={"Please wait for a moment..."}
        />
      )}
      {/* 3 - Payment */}
      {/* 4 - Billing*/}
      {/* 5 - Payment Message Card*/}
      {activeStep !== 2 && (
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
    </Box>
  );
}

export default HotelFlow;
