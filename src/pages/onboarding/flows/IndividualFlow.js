import React, { useState, useEffect } from "react";
import { Box, Button, useTheme } from "@mui/material";
import TitleDescriptionCoupon from "../components/TitleDescriptionCoupon";
import MultiChipSelector from "../components/MultiChipSelector";
import MessageCard from "../components/MessageCard";
import CircularProgressLoader from "../../../components/CircularProgressLoader";
import VenueCard from "../components/VenueCard";

function IndividualFlow({ activeStep, handleContinue, toggleBackButton }) {
  console.log(activeStep);
  const theme = useTheme();
  const [quantityNumber, setQuantityNumber] = useState(0);
  const [selectedChips, setSelectedChips] = useState([]);

  const handleQuantityNumberChange = (event) => {
    setQuantityNumber(event.target.value);
  };

  const handleSelectedChipsChange = (chips) => {
    setSelectedChips(chips);
  };

  // To hide the Back Button on the Message View
  useEffect(() => {
    if (activeStep === 5) {
      toggleBackButton(false);
    } else {
      toggleBackButton(true);
    }
  }, [activeStep, toggleBackButton]);

  return (
    <>
      {activeStep === 2 && (
        <Box sx={{ width: "100%" }}>
          <TitleDescriptionCoupon isCoupon={true} />
          <MultiChipSelector
            onSelectedChipsChange={handleSelectedChipsChange}
            isSelectOneChip={true}
          />
        </Box>
      )}
      {activeStep === 3 && (
        <Box sx={{ width: "100%" }}>
          <TitleDescriptionCoupon isCoupon={true} />
          <VenueCard
            toolTipText={
              "A multi-venue is a complex or facility that houses multiple event spaces within the same location, excluding any areas designated for restaurant services."
            }
            quantityNumber={quantityNumber}
            handleQuantityNumberChange={handleQuantityNumberChange}
            title={"Venues"}
            description={selectedChips[0]}
          />
        </Box>
      )}
      {activeStep === 4 && (
        <MessageCard
          loaderComponent={<CircularProgressLoader color={"red"} />}
          primaryText={"Creating a plan suitable to your venue"}
          secondaryText={"Please wait for a moment..."}
        />
      )}
      {/* 5 - Payment */}
      {/* 6 - Billing */}
      {/* 7 - Payment Message Card */}
      {activeStep !== 4 && (
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
    </>
  );
}

export default IndividualFlow;
